import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Não deixa clicar no desktop e desselecionar ícones
        toggleTheme();
      }}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 9999, // Fica acima de tudo
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '50px', // Ajustar conforme o desenho
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
      }}
      // Efeito de clique simples
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        // Se o tema for 'light', mostra o botão para ir pro dark (Lua)
        // Se o tema for 'dark', mostra o botão para ir pro light (Sol)
        src={theme === 'light' ? '/assets/btn-theme-light.png' : '/assets/btn-theme-dark.png'} 
        alt="Trocar Tema"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
};

export default ThemeToggle;