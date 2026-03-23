import React from 'react';
import '../styles/Controls.scss';

const BackgroundToggle = ({ bgType, toggleBg }) => {
  return (
    <button
      className="control-btn"
      onClick={(e) => {
        e.stopPropagation();
        toggleBg();
      }}
      title="Alternar Fundo"
    >
      <img 
        src={bgType === 'static' ? '/portifolio-os/assets/btn-bg-static.png' : '/portifolio-os/assets/btn-bg-gif.png'} 
        alt="Trocar Background"
      />
    </button>
  );
};

export default BackgroundToggle;