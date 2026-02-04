import React from 'react';
import '../../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Topo: Foto e Nome */}
      <div className="about-header">
        {/* Placeholder da Foto - Depois você coloca background-image via CSS ou style */}
        <div className="profile-photo" style={{backgroundImage: 'url(../../assets/portrait.png)'}}></div>
        
        <div className="header-text">
          <h2>Gustavo Henrique</h2>
          <span>24 anos • Desenvolvedor</span>
        </div>
      </div>

      {/* Corpo: Tópicos */}
      <div className="about-body">
        
        <div className="topic-section">
          <h3>quem sou eu</h3>
          <ul>
            <li>Apaixonado por arte e código</li>
            <li>Moro em São Paulo</li>
            <li>Gosto de jogos retrô e café</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>skills</h3>
          <ul>
            <li>Ilustração Digital (Procreate, PS)</li>
            <li>React & Front-end</li>
            <li>Pixel Art</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>quem sou eu</h3>
          <ul>
            <li>Apaixonado por arte e código</li>
            <li>Moro em São Paulo</li>
            <li>Gosto de jogos retrô e café</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>skills</h3>
          <ul>
            <li>Ilustração Digital (Procreate, PS)</li>
            <li>React & Front-end</li>
            <li>Pixel Art</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>quem sou eu</h3>
          <ul>
            <li>Apaixonado por arte e código</li>
            <li>Moro em São Paulo</li>
            <li>Gosto de jogos retrô e café</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>skills</h3>
          <ul>
            <li>Ilustração Digital (Procreate, PS)</li>
            <li>React & Front-end</li>
            <li>Pixel Art</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>quem sou eu</h3>
          <ul>
            <li>Apaixonado por arte e código</li>
            <li>Moro em São Paulo</li>
            <li>Gosto de jogos retrô e café</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>skills</h3>
          <ul>
            <li>Ilustração Digital (Procreate, PS)</li>
            <li>React & Front-end</li>
            <li>Pixel Art</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>quem sou eu</h3>
          <ul>
            <li>Apaixonado por arte e código</li>
            <li>Moro em São Paulo</li>
            <li>Gosto de jogos retrô e café</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>skills</h3>
          <ul>
            <li>Ilustração Digital (Procreate, PS)</li>
            <li>React & Front-end</li>
            <li>Pixel Art</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;