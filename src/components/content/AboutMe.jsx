import React from 'react';
import '../../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Topo: Foto e Nome */}
      <div className="about-header">
        {/* Placeholder da Foto */}
        <div className="profile-photo" style={{backgroundImage: 'url(../../assets/portrait.png)'}}></div>
        
        <div className="header-text">
          <h2>Gustavo Henrique</h2>
          <span>Desenvolvedor, Artista (nas horas vagas), Cientista da Computação pelo <a href="https://www.ifnmg.edu.br/montesclaros">IFNMG</a>.</span>
        </div>
      </div>

      {/* Corpo: Tópicos */}
      <div className="about-body">
        
        <div className="topic-section">
          <h4>Eae, Meu nome é Gustavo! Algumas coisas que eu faço no meu ramo:</h4>
          <ul>
            <li>Desenvolvimento, principalmente python e c++, mas já trabalhei com Lua e Golang,</li>
            <li>Frontend, porém iniciante,</li>
            <li>Faço pesquisa em problemas de otimização,</li>
            <li>Também faço desenhos sob demanda!</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Formação</h3>
          <ul>
            <li>Formei no ensino técnico em Técnico em Informática pelo IFNMG,</li>
            <li>Atualmente formando no curso Bacharelado em Ciência da Computação também pelo IFNMG.</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Outras habilidades</h3>
          <ul>
            <li>Eu sei inglês bem,</li>
            <li>Comecei o básico de japonês, mas bem pouquinho.</li>
            <li>Eu faço desenhos pixelart,</li>
            <li>Tenho experiência em suporte técnico, validação de conformidade e documentação de projetos.</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Meus interesses pessoais</h3>
          <ul>
            <li>Jogo vídeo games, gosto bem variado, de JRPG à Puzzle,</li>
            <li>Leio mangás, vejo alguns animes (principalmente os que são obras de arte visuais),</li>
            <li>Gosto de desenhar,</li>
            <li>Gosto de TCGs em geral, MTG, Pokemon, Yugi e FaB!</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Extra</h3>
          <ul>
            <li>Meu jogo favorito é o Chrono Cross,</li>
            <li>Mas tenho um carinho especial pela série Mother e seus semelhantes,</li>
            <li>Jogos 8 e 16 bit pra mim são os mais charmosos.</li>
            <li>Amo a estética Western Futurista e fantasia,</li>
            <li>Gosto muito de animes de comédia,</li>
            <li>Eu tento ser um cara maneiro (Soul - Soul Eater).</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;