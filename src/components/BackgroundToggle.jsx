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
        top: '80px', // Fica abaixo do botão de tema (que está em 20px + 50px altura)
        left: '20px',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
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
        src={bgType === 'static' ? './assets/btn-bg-static.png' : './assets/btn-bg-gif.png'} 
        alt="Trocar Background"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
};

export default BackgroundToggle;