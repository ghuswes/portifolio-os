import React from 'react';
import '../styles/DesktopIcon.scss';

const DesktopIcon = ({ label, id, isSelected, onSelect, onDoubleClick, isOpen }) => {
  // Função para lidar com o clique simples (Seleção/Abertura)
  const handleClick = (e) => {
    e.stopPropagation(); // Impede que o clique atravesse e vá para a janela/fundo
    
    // Detecção de largura abaixo de laptop (1024px)
    const isMobileResolution = window.innerWidth < 1024;
    
    if (isMobileResolution) {
      // Abre a janela diretamente com clique único abaixo de 1024px
      onDoubleClick(id);
    } else {
      // Comportamento normal em desktop (>= 1024px):
      // Se for dispositivo de toque (híbrido) e já estiver selecionado, abre.
      const isTouchDevice = window.matchMedia('(any-pointer: coarse)').matches;
      if (isTouchDevice && isSelected) {
        onDoubleClick(id);
      } else {
        onSelect(id);
      }
    }
  };

  // Função para lidar com o clique duplo (Ação no Desktop)
  const handleDoubleClick = (e) => {
    e.stopPropagation();
    // Apenas ativa no desktop, pois no mobile o clique único já abre
    if (window.innerWidth >= 1024) {
      onDoubleClick(id);
    }
  };

  return (
    <div 
      className={`desktop-icon ${isSelected ? 'selected' : ''} icon-${id}`} 
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {/* Container da Imagem */}
      <div className="icon-graphic"></div>
      
      {/* Label */}
      <span className="icon-label">{label}</span>

      {/* Indicador de Janela Aberta (Usado no Mobile/Sidebar) */}
      {isOpen && <div className="indicator"></div>}
    </div>
  );
};

export default DesktopIcon;