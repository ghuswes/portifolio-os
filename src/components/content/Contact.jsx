import React from 'react';
import '../../styles/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Imagem no canto inferior esquerdo */}
      <img 
        src="/portifolio-os/assets/email-address-portrait.png" 
        alt="Contato" 
        className="contact-portrait" 
      />
      
      {/* Frase no centro-direito */}
      <div className="contact-text-container">
        <p className="contact-text">
          Entre em contato por:<br />
          <span className="contact-email">ghuswes@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
