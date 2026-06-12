import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../styles/Window.scss';

const Window = ({ 
  isOpen, 
  isMinimized, 
  onClose, 
  onMinimize, 
  children, 
  title = "home",
  zIndex,   // Controla a ordem de empilhamento
  onFocus,   // Função para trazer pra frente ao clicar
  className
}) => {
  const nodeRef = useRef(null);
  const [pressedButton, setPressedButton] = useState(null);

  const handleControlAction = (e, buttonType, action) => {
    e.stopPropagation();
    if (e.type === 'touchstart') {
      e.preventDefault();
    }
    
    setPressedButton(buttonType);

    setTimeout(() => {
      action();
      setPressedButton(null);
    }, 120); // Delay de 120ms para feedback visual do botão pressionado
  };

  if (!isOpen || isMinimized) return null;

  return (
    <Draggable
      handle=".window-header"
      nodeRef={nodeRef}
      bounds="parent"
      onMouseDown={onFocus} // Quando começar a arrastar, já foca a janela
    >
      <div 
        className={`os-window ${className || ''}`} 
        ref={nodeRef}
        // Aplicamos o zIndex aqui via estilo inline
        style={{ zIndex: zIndex }}
        // Também focamos se clicar em qualquer lugar da janela (não só na barra)
        onMouseDown={onFocus} 
      >
        {/* Barra de Título */}
        <div className="window-header">
          <span className="window-title">{title}</span>
          
          <div className="window-controls">
            <button 
              className={`control-btn minimize ${pressedButton === 'minimize' ? 'pressed' : ''}`} 
              onClick={(e) => handleControlAction(e, 'minimize', onMinimize)}
              onTouchStart={(e) => handleControlAction(e, 'minimize', onMinimize)}
              onMouseDown={(e) => e.stopPropagation()} // Evita início de arraste com mouse
              aria-label="Minimizar"
            ></button>
            
            <button 
              className={`control-btn close ${pressedButton === 'close' ? 'pressed' : ''}`} 
              onClick={(e) => handleControlAction(e, 'close', onClose)}
              onTouchStart={(e) => handleControlAction(e, 'close', onClose)}
              onMouseDown={(e) => e.stopPropagation()} // Evita início de arraste com mouse
              aria-label="Fechar"
            ></button>
          </div>
        </div>

        {/* Conteúdo da Janela */}
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;