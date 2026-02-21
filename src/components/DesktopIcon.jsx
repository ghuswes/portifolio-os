import React from 'react';
import '../styles/DesktopIcon.scss';

const DesktopIcon = ({ label, id, isSelected, onSelect, onDoubleClick }) => {
  // Função para lidar com o clique simples (Seleção)
  const handleClick = (e) => {
    e.stopPropagation(); // Impede que o clique atravesse e vá para a janela/fundo
    onSelect(id);
  };

  // Função para lidar com o clique duplo (Ação)
  const handleDoubleClick = (e) => {
    e.stopPropagation();
    onDoubleClick(id);
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
    </div>
  );
};

export default DesktopIcon;