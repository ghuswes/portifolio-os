import React from 'react';
import DesktopIcon from '../DesktopIcon';

const Social = ({ selectedIconId, onSelect, onDoubleClick }) => {
  
  // Lista de Ícones Sociais
  const socialItems = [
    { id: 'github', label: 'GitHub' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'discord', label: 'Discord' },
  ];

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', // Centraliza verticalmente
      }}
    >
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {socialItems.map((item) => (
          <DesktopIcon 
            key={item.id}
            id={item.id}
            label={item.label}
            isSelected={selectedIconId === item.id}
            onSelect={onSelect}
            onDoubleClick={onDoubleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Social;