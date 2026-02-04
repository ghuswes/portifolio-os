import { useState } from 'react'
import Window from './components/Window'
import DesktopIcon from './components/DesktopIcon'
import AboutMe from './components/content/AboutMe' // Importe o conteúdo novo

function App() {
  // --- ESTADOS DA JANELA HOME ---
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isHomeMinimized, setIsHomeMinimized] = useState(false);

  // --- ESTADOS DA JANELA SOBRE MIM ---
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutMinimized, setIsAboutMinimized] = useState(false);

  // --- CONTROLE DE FOCO (Z-INDEX) ---
  // Guarda o ID da janela que está na frente ('home' ou 'about')
  const [activeWindow, setActiveWindow] = useState('home');

  // --- CONTROLE DE ÍCONES ---
  const [selectedIconId, setSelectedIconId] = useState(null);

  // Função para trazer a janela para frente ao clicar nela
  const focusWindow = (windowId) => {
    setActiveWindow(windowId);
  };

  // --- LÓGICA DO DUPLO CLIQUE (ABRIR JANELAS) ---
  const handleIconAction = (id) => {
    if (id === 'about') {
      setIsAboutOpen(true);       // Abre a janela
      setIsAboutMinimized(false); // Garante que não está minimizada
      setActiveWindow('about');   // Traz para frente
    } else {
      alert(`Funcionalidade para ${id} em breve!`);
    }
  };

  // --- MANIPULADORES GERAIS ---
  const handleDeselectAll = () => setSelectedIconId(null);
  const handleIconSelect = (id) => setSelectedIconId(id);

  // Dados dos ícones
  const menuItems = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'work', label: 'Trabalhos' },
    { id: 'social', label: 'Social' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <div className="desktop" onClick={handleDeselectAll}>
      
      {!isHomeOpen && (
        <button 
          onClick={(e) => { e.stopPropagation(); setIsHomeOpen(true); focusWindow('home'); }} 
          style={{position: 'absolute', top: 20, left: 20, zIndex: 1000}}
        >
          Abrir Home
        </button>
      )}

      {/* --- JANELA 1: HOME --- */}
      <Window 
        isOpen={isHomeOpen}
        isMinimized={isHomeMinimized}
        onClose={() => setIsHomeOpen(false)}
        onMinimize={() => setIsHomeMinimized(true)}
        title="home"
        
        /* Novas Props passadas direto */
        zIndex={activeWindow === 'home' ? 2 : 1}
        onFocus={() => focusWindow('home')}
      >
        <div className="home-content" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            width: '100%', 
            padding: '20px',
          }}>
          <div style={{ marginBottom: 40, textAlign: 'center', pointerEvents: 'none' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: '2rem' }}>
              Oi! <span style={{ color: 'var(--accent-color)' }}>Gustavo</span> aqui
            </h1>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>ilustrador e desenvolvedor</p>
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
        title="sobre mim"
        className="about-window"  /* Classe customizada para estilos específicos */
        
        /* Novas Props passadas direto */
        zIndex={activeWindow === 'about' ? 2 : 1}
        onFocus={() => focusWindow('about')}
      >
        <AboutMe />
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
      </div>

    </div>
  )
}

// Componente simples para os itens da barra de tarefas
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