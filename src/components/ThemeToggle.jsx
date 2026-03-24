import React from 'react';
import '../styles/Controls.scss';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="control-btn"
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      title="Alternar Tema"
    >
      <img 
        src={theme === 'light' ? '/portifolio-os/assets/btn-theme-light.png' : '/portifolio-os/assets/btn-theme-dark.png'} 
        alt="Trocar Tema"
      />
    </button>
  );
};

export default ThemeToggle;