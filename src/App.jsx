import { useState, useMemo, useEffect } from 'react'
import Window from './components/Window'
import DesktopIcon from './components/DesktopIcon'
import Dock from './components/Dock'
import AboutMe from './components/content/AboutMe'
import Social from './components/content/Social'
import Works from './components/content/Works'
import Contact from './components/content/Contact'
import ThemeToggle from './components/ThemeToggle'
import BackgroundToggle from './components/BackgroundToggle'
import HelpToggle from './components/HelpToggle'
import './styles/Sidebar.scss'

function App() {
  // --- ESTADOS DAS JANELAS ---
  const [windows, setWindows] = useState({
    home: { id: 'home', label: 'Home', isOpen: true, isMinimized: false, zIndex: 3 },
    about: { id: 'about', label: 'Sobre Mim', isOpen: false, isMinimized: false, zIndex: 1 },
    social: { id: 'social', label: 'Social', isOpen: false, isMinimized: false, zIndex: 1 },
    work: { id: 'work', label: 'Trabalhos', isOpen: false, isMinimized: false, zIndex: 1 },
    contact: { id: 'contact', label: 'Contato', isOpen: false, isMinimized: false, zIndex: 1 },
  });

  // --- CONTROLE DE FOCO ---
  const [activeWindow, setActiveWindow] = useState('home');
  const [selectedIconId, setSelectedIconId] = useState(null);

  const focusWindow = (id) => {
    setActiveWindow(id);
    setWindows(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        newState[key] = { ...newState[key], zIndex: key === id ? 10 : 1 };
      });
      return newState;
    });
  };

  const openWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false }
    }));
    focusWindow(id);
  };

  const closeWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false, isMinimized: false }
    }));
  };

  const minimizeWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }));
  };

  const restoreWindow = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: false }
    }));
    focusWindow(id);
  };

  const handleDeselectAll = () => setSelectedIconId(null);
  const handleIconSelect = (id) => setSelectedIconId(id);

  // --- TEMA E FUNDO ---
  const [theme, setTheme] = useState('light');
  const [bgType, setBgType] = useState('gif');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleBg = () => {
    setBgType((prev) => (prev === 'static' ? 'gif' : 'static'));
  };

  // --- LÓGICA DE AÇÕES DOS ÍCONES ---
  const handleIconAction = (id) => {
    if (windows[id]) {
      if (isMobile) {
        // Se a janela clicada já estiver aberta, fecha ela (volta para o desktop)
        if (windows[id].isOpen) {
          closeWindow(id);
        } else {
          // Se for outra janela, fecha as demais e abre a nova
          setWindows(prev => {
            const newState = { ...prev };
            Object.keys(newState).forEach(key => {
              if (key !== id) {
                newState[key] = { ...newState[key], isOpen: false };
              } else {
                newState[key] = { ...newState[key], isOpen: true, isMinimized: false };
              }
            });
            return newState;
          });
          focusWindow(id);
        }
      } else {
        // Comportamento normal de desktop (permite múltiplas janelas abertas)
        openWindow(id);
      }
    } else {
      switch (id) {
        case 'github':
          window.open('https://github.com/ghuswes/', '_blank');
          break;
        case 'instagram':
          window.open('https://instagram.com/ghus_wes/', '_blank');
          break;
        case 'linkedin':
          window.open('https://linkedin.com/in/ghuswes/', '_blank');
          break;
        case 'discord':
          window.open('https://discord.com/users/411625986979790858', '_blank');
          break;
        default:
          alert(`Funcionalidade para ${id} em breve!`);
      }
    }
  };

  // Ícones da Dock: Home (sempre) + janelas abertas ou minimizadas
  const dockItems = useMemo(() => {
    return Object.values(windows).filter(win => win.id === 'home' || win.isOpen || win.isMinimized);
  }, [windows]);

  const handleDockIconClick = (id) => {
    const win = windows[id];
    if (!win.isOpen) {
      openWindow(id);
    } else if (win.isMinimized) {
      restoreWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const menuItems = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'work', label: 'Trabalhos' },
    { id: 'social', label: 'Social' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <div className="desktop" onClick={handleDeselectAll} data-theme={theme} data-bg={bgType}>
      
      <div className="controls-container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <BackgroundToggle bgType={bgType} toggleBg={toggleBg} />
        <HelpToggle message={isMobile ? "Recomendado acessar pelo desktop." : <>Use <b>clique-duplo</b> para os ícones e <b>clique simples</b> na barra!</>} />
      </div>

      {/* --- ABA LATERAL (APENAS MOBILE) --- */}
      {isMobile && (
        <div className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
          <button 
            className="sidebar-arrow-btn"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            aria-label={sidebarOpen ? "Fechar Menu" : "Abrir Menu"}
          />
          
          <div className="sidebar-drawer">
            <div className="sidebar-icons">
              <DesktopIcon 
                id="about" 
                label="Sobre mim" 
                isSelected={selectedIconId === 'about'}
                onSelect={handleIconSelect}
                onDoubleClick={handleIconAction}
                isOpen={windows.about.isOpen}
              />
              <DesktopIcon 
                id="work" 
                label="Trabalhos" 
                isSelected={selectedIconId === 'work'}
                onSelect={handleIconSelect}
                onDoubleClick={handleIconAction}
                isOpen={windows.work.isOpen}
              />
              <DesktopIcon 
                id="social" 
                label="Social" 
                isSelected={selectedIconId === 'social'}
                onSelect={handleIconSelect}
                onDoubleClick={handleIconAction}
                isOpen={windows.social.isOpen}
              />
              <DesktopIcon 
                id="contact" 
                label="Contato" 
                isSelected={selectedIconId === 'contact'}
                onSelect={handleIconSelect}
                onDoubleClick={handleIconAction}
                isOpen={windows.contact.isOpen}
              />
            </div>
          </div>
        </div>
      )}

      {/* --- JANELA 1: HOME (APENAS DESKTOP) --- */}
      {!isMobile && (
        <Window 
          isOpen={windows.home.isOpen}
          isMinimized={windows.home.isMinimized}
          onClose={() => closeWindow('home')}
          onMinimize={() => minimizeWindow('home')}
          title="Home"
          zIndex={windows.home.zIndex}
          onFocus={() => focusWindow('home')}
        >
           <div className="home-content" 
            style={{ 
              display: 'flex', flexDirection: 'column', alignItems: 'center', 
              width: '100%', padding: '20px',
            }}>
            <div style={{ marginBottom: 40, textAlign: 'center', pointerEvents: 'none' }}>
              <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem', marginTop: '2rem', color: 'var(--text-primary)' }}>
                Oi! <span style={{ color: 'var(--accent-color)' }}>Gustavo</span> aqui
              </h1>
              <p style={{ color: 'var(--text-secondary, #888)', fontSize: '3rem' }}>ilustrador e desenvolvedor</p>
            </div>
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {menuItems.map((item) => (
                <DesktopIcon 
                  key={item.id} id={item.id} label={item.label}
                  isSelected={selectedIconId === item.id}
                  onSelect={handleIconSelect}
                  onDoubleClick={handleIconAction}
                />
              ))}
            </div>
          </div>
        </Window>
      )}

      {/* --- JANELA 2: SOBRE MIM --- */}
      <Window 
        isOpen={windows.about.isOpen}
        isMinimized={windows.about.isMinimized}
        onClose={() => closeWindow('about')}
        onMinimize={() => minimizeWindow('about')}
        title="Sobre Mim"
        className="about-window"
        zIndex={windows.about.zIndex}
        onFocus={() => focusWindow('about')}
      >
        <AboutMe />
      </Window>

      {/* --- JANELA 3: SOCIAL --- */}
      <Window 
        isOpen={windows.social.isOpen}
        isMinimized={windows.social.isMinimized}
        onClose={() => closeWindow('social')}
        onMinimize={() => minimizeWindow('social')}
        title="Social"
        className="social-window" 
        zIndex={windows.social.zIndex}
        onFocus={() => focusWindow('social')}
      >
        <Social 
          selectedIconId={selectedIconId}
          onSelect={handleIconSelect}
          onDoubleClick={handleIconAction}
        />
      </Window>

      {/* --- JANELA 4: TRABALHOS --- */}
      <Window 
        isOpen={windows.work.isOpen}
        isMinimized={windows.work.isMinimized}
        onClose={() => closeWindow('work')}
        onMinimize={() => minimizeWindow('work')}
        title="Trabalhos"
        className="works-window"
        zIndex={windows.work.zIndex}
        onFocus={() => focusWindow('work')}
      >
        <Works />
      </Window>

      {/* --- JANELA 5: CONTATO --- */}
      <Window 
        isOpen={windows.contact.isOpen}
        isMinimized={windows.contact.isMinimized}
        onClose={() => closeWindow('contact')}
        onMinimize={() => minimizeWindow('contact')}
        title="Contato"
        className="contact-window"
        zIndex={windows.contact.zIndex}
        onFocus={() => focusWindow('contact')}
      >
        <Contact />
      </Window>
      
      {/* --- BARRA DE TAREFAS (DOCK) --- */}
      <Dock 
        windows={dockItems} 
        onIconClick={handleDockIconClick} 
      />

    </div>
  )
}

export default App