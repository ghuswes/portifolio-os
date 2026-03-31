import React from 'react';
import '../styles/Dock.scss';
import '../styles/DesktopIcon.scss'; // Reuso do mapeamento de ícones

const Dock = ({ windows, onIconClick }) => {
  return (
    <div className="dock">
      {windows.map((win) => (
        <div
          key={win.id}
          className={`dock-item icon-${win.id} ${win.isMinimized ? 'minimized' : ''}`}
          onClick={(e) => { e.stopPropagation(); onIconClick(win.id); }}
          title={win.label}
        >
          <div className="icon-graphic"></div>
          {/* Indicador de Janela Aberta ou Minimizada */}
          {(win.isOpen || win.isMinimized) && <div className="indicator"></div>}
        </div>
      ))}
    </div>
  );
};

export default Dock;
