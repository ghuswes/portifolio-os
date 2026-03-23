import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Works.scss';

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="collapsible-section">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );
};

// Componente separado para o Modal
const ImageModal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div 
      className="image-modal-overlay" 
      onMouseDown={onClose} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.7)', // Fundo um pouco mais visível
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out'
      }}
    >
      <div 
        className="modal-content" 
        onMouseDown={(e) => e.stopPropagation()} 
        style={{ 
          background: 'none', 
          border: 'none', 
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centraliza a imagem e o texto
          gap: '1.5rem'
        }}
      >
        <img 
          src={image.src} 
          alt={image.title} 
          style={{ 
            maxWidth: '90vw', 
            maxHeight: '80vh', 
            objectFit: 'contain',
            border: '4px solid #fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            imageRendering: 'pixelated'
          }}
        />
        <div className="modal-info" style={{ border: 'none', padding: 0 }}>
          <span style={{ 
            color: '#fff', 
            fontSize: '2.5rem', 
            fontFamily: 'var(--font-body)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
          }}>
            {image.title}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const tools = [
    { id: 'aseprite', name: 'Aseprite', icon: '/portifolio-os/assets/tool-aseprite.png' },
    { id: 'csp', name: 'Clip Studio', icon: '/portifolio-os/assets/tool-csp.png' },
    { id: 'krita', name: 'Krita', icon: '/portifolio-os/assets/tool-krita.png' },
    { id: 'figma', name: 'Figma', icon: '/portifolio-os/assets/tool-figma.png' },
  ];

  const illustrations = [
    { id: 1, src: '/portifolio-os/assets/grumpycat.png', title: 'Arte comissionada, inspirada no "Grumpy Cat"' }, 
    { id: 2, src: '/portifolio-os/assets/punhusky.png', title: 'Arte comissionada, inspirada no "Pun Husky"' },
    { id: 3, src: '/portifolio-os/assets/floresta.png', title: 'Arte Alterada para "Floresta Básica" (MTG) ' },
    { id: 4, src: '/portifolio-os/assets/pantano.png', title: 'Arte Alterada para "Pântano Básico" (MTG)' },
  ];

  return (
    <div className="works-container">
      <CollapsibleSection title="Ferramentas">
        <div className="tools-grid">
          {tools.map(tool => (
            <div key={tool.id} className="tool-item">
              <div className="tool-icon">
                <img src={tool.icon} alt={tool.name} onError={(e) => e.target.src = '/portifolio-os/assets/window-frame.png'} />
              </div>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Ilustrações">
        <div className="illustrations-grid">
          {illustrations.map(img => (
            <div 
              key={img.id} 
              className="illustration-card" 
              onMouseDown={(e) => {
                e.stopPropagation();
                setSelectedImage(img);
              }}
            >
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Projetos" defaultOpen={false}>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-info">
            <h4>Título do Projeto</h4>
            <p>Descrição breve do projeto, tecnologias utilizadas e seu papel no desenvolvimento.</p>
          </div>
        </div>
      </CollapsibleSection>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Works;