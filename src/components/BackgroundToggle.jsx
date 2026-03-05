import React from 'react';

const BackgroundToggle = ({ bgType, toggleBg }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleBg();
      }}
      title="Alternar Fundo"
      style={{
        position: 'absolute',
        top: '10%',
        left: '1%',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '5rem',
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        // Lógica: Se está estático, mostra o botão para por GIF. Se está GIF, mostra botão para por estático.
        src={bgType === 'static' ? '/portifolio-os/assets/btn-bg-static.png' : '/portifolio-os/assets/btn-bg-gif.png'} 
        alt="Trocar Background"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
};

export default BackgroundToggle;