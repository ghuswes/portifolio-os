import React, { useState, useEffect, useRef } from 'react';
import '../styles/Controls.scss';

const HelpToggle = ({ message = "Oi! Eu sou o Gustavo. Explore meu portfólio clicando nos ícones!" }) => {
  const [showBubble, setShowBubble] = useState(false);
  const bubbleRef = useRef(null);
  const timerRef = useRef(null);

  const toggleBubble = (e) => {
    e.stopPropagation();
    
    // Se já estiver aberto, apenas fecha
    if (showBubble) {
      closeBubble();
    } else {
      setShowBubble(true);
    }
  };

  const closeBubble = () => {
    setShowBubble(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Efeito para fechar ao clicar fora e gerenciar o timer
  useEffect(() => {
    if (showBubble) {
      // 1. Timer de 3 segundos para fechar automaticamente
      timerRef.current = setTimeout(() => {
        closeBubble();
      }, 3000);

      // 2. Fechar ao clicar em qualquer lugar da tela
      const handleClickOutside = (event) => {
        // Se o clique não foi no botão nem no balão, fecha
        if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
          closeBubble();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [showBubble]);

  return (
    <div className="help-container" ref={bubbleRef}>
      <button
        className="control-btn"
        onClick={toggleBubble}
        title="Ajuda"
      >
        <img 
          src="/portifolio-os/assets/btn-help.png"
          alt="Botão de Ajuda"
        />
      </button>

      {showBubble && (
        <div className="speech-bubble">
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default HelpToggle;