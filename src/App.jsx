import { useState } from 'react'
import Window from './components/Window'
import DesktopIcon from './components/DesktopIcon'
import AboutMe from './components/content/AboutMe'
import Social from './components/content/Social'
import Works from './components/content/Works'
import ThemeToggle from './components/ThemeToggle'
import BackgroundToggle from './components/BackgroundToggle'
import HelpToggle from './components/HelpToggle'

function App() {
  // --- ESTADOS DAS JANELAS ---
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isHomeMinimized, setIsHomeMinimized] = useState(false);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutMinimized, setIsAboutMinimized] = useState(false);

  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isSocialMinimized, setIsSocialMinimized] = useState(false);

  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isWorksMinimized, setIsWorksMinimized] = useState(false);

  // --- CONTROLE DE FOCO ---
  const [activeWindow, setActiveWindow] = useState('home');
  const [selectedIconId, setSelectedIconId] = useState(null);

  const focusWindow = (windowId) => setActiveWindow(windowId);
  const handleDeselectAll = () => setSelectedIconId(null);
  const handleIconSelect = (id) => setSelectedIconId(id);

  // --- TEMA E FUNDO ---
  const [theme, setTheme] = useState('light');
  const [bgType, setBgType] = useState('gif');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleBg = () => {
    setBgType((prev) => (prev === 'static' ? 'gif' : 'static'));
  };

  // --- LÓGICA DE AÇÕES DOS ÍCONES ---
  const handleIconAction = (id) => {
    switch (id) {
      case 'about':
        setIsAboutOpen(true);
        setIsAboutMinimized(false);
        focusWindow('about');
        break;
      
      case 'social':
        setIsSocialOpen(true);
        setIsSocialMinimized(false);
        focusWindow('social');
        break;

      case 'work':
        setIsWorksOpen(true);
        setIsWorksMinimized(false);
        focusWindow('work');
        break;

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
  };

  const menuItems = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'work', label: 'Trabalhos' },
    { id: 'social', label: 'Social' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <div className="desktop" onClick={handleDeselectAll} data-theme={theme} data-bg={bgType}>
      
      {/* --- BOTÕES DE CONTROLE --- */}
      <div className="controls-container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <BackgroundToggle bgType={bgType} toggleBg={toggleBg} />
        <HelpToggle message={<>Use <b>clique-duplo</b> para interagir com os ícones!</>} />
      </div>

      {/* Botão de segurança da Home */}
      {!isHomeOpen && (
        <button 
          onClick={(e) => { e.stopPropagation(); setIsHomeOpen(true); focusWindow('home'); }} 
          className="control-btn"
          style={{position: 'absolute', top: '22rem', left: '1.5rem', zIndex: 1000, background: 'white', borderRadius: '8px', border: '2px solid #000'}}
        >
          🏠
        </button>
      )}

      {/* --- JANELA 1: HOME --- */}
      <Window 
        isOpen={isHomeOpen}
        isMinimized={isHomeMinimized}
        onClose={() => setIsHomeOpen(false)}
        onMinimize={() => setIsHomeMinimized(true)}
        title="Home"
        zIndex={activeWindow === 'home' ? 3 : 1}
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
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
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

      {/* --- JANELA 2: SOBRE MIM --- */}
      <Window 
        isOpen={isAboutOpen}
        isMinimized={isAboutMinimized}
        onClose={() => setIsAboutOpen(false)}
        onMinimize={() => setIsAboutMinimized(true)}
        title="Sobre Mim"
        className="about-window"
        zIndex={activeWindow === 'about' ? 3 : 1}
        onFocus={() => focusWindow('about')}
      >
        <AboutMe />
      </Window>

      {/* --- JANELA 3: SOCIAL --- */}
      <Window 
        isOpen={isSocialOpen}
        isMinimized={isSocialMinimized}
        onClose={() => setIsSocialOpen(false)}
        onMinimize={() => setIsSocialMinimized(true)}
        title="Social"
        className="social-window" 
        zIndex={activeWindow === 'social' ? 3 : 1}
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
        isOpen={isWorksOpen}
        isMinimized={isWorksMinimized}
        onClose={() => setIsWorksOpen(false)}
        onMinimize={() => setIsWorksMinimized(true)}
        title="Trabalhos"
        className="works-window"
        zIndex={activeWindow === 'work' ? 3 : 1}
        onFocus={() => focusWindow('work')}
      >
        <Works />
      </Window>
      
      {/* --- BARRA DE TAREFAS (DOCK) --- */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '15px', zIndex: 1000
      }}>
        {isHomeMinimized && (
          <DockItem label="Home" onClick={() => { setIsHomeMinimized(false); focusWindow('home'); }} />
        )}
        {isAboutMinimized && (
          <DockItem label="Sobre Mim" onClick={() => { setIsAboutMinimized(false); focusWindow('about'); }} />
        )}
        {isSocialMinimized && (
          <DockItem label="Social" onClick={() => { setIsSocialMinimized(false); focusWindow('social'); }} />
        )}
        {isWorksMinimized && (
          <DockItem label="Trabalhos" onClick={() => { setIsWorksMinimized(false); focusWindow('work'); }} />
        )}
      </div>

    </div>
  )
}

const DockItem = ({ label, onClick }) => (
  <div 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    style={{
      background: 'white', padding: '10px 20px', borderRadius: 10, cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)', fontWeight: 'bold', fontSize: '0.9rem',
      display: 'flex', alignItems: 'center', gap: '5px', border: '2px solid #4a4a4a'
    }}
  >
    📂 {label}
  </div>
);

export default App