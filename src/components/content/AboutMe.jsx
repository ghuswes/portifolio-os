import React from 'react';
import '../../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Topo: Foto e Nome */}
      <div className="about-header">
        {/* Placeholder da Foto */}
        <div className="profile-photo" style={{backgroundImage: 'url(/portifolio-os/assets/portrait.png)'}}></div>
        
        <div className="header-text">
          <h2>Gustavo Henrique</h2>
          <span>Desenvolvedor, Artista (nas horas vagas) e Cientista da Computação pelo <a href="https://www.ifnmg.edu.br/montesclaros">IFNMG</a>.</span>
        </div>
      </div>

      {/* Corpo: Tópicos */}
      <div className="about-body">
        
        <div className="topic-section">
          <h3>Eae, Meu nome é Gustavo! Essas são algumas coisas que eu faço no meu ramo:</h3>
          <ul>
            <li>Desenvolvimento, principalmente Python e C++, mas já trabalhei com Lua e Golang</li>
            <li>Frontend, porém iniciante</li>
            <li>Faço pesquisa em problemas de otimização</li>
            <li>Também faço desenhos sob demanda!</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Formação</h3>
          <ul>
            <li>Formei no ensino técnico em Técnico em Informática pelo IFNMG</li>
            <li>Atualmente formando no curso Bacharelado em Ciência da Computação também pelo IFNMG</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Outras habilidades</h3>
          <ul>
            <li>Eu sei inglês bem</li>
            <li>Comecei o básico de japonês, mas bem pouquinho</li>
            <li>Tenho experiência em suporte técnico, validação de conformidade e documentação de projetos</li>
            <li>Eu faço desenhos pixelart</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Meus interesses pessoais</h3>
          <ul>
            <li>Games, de JRPG a jogos de Puzzle</li>
            <li>Leio mangás, vejo alguns animes (principalmente os que são obras de arte visuais)</li>
            <li>Gosto de desenhar</li>
            <li>Gosto de TCGs em geral, MTG, Pokémon, YGO e FaB</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Extra</h3>
          <ul>
            <li>Jogo favorito: Chrono Cross</li>
            <li>Carinho pela franquia Mother</li>
            <li>Pixelart é meu ponto fraco</li>
            <li>Amo trilhas sonoras de games</li>
            <li>Gênero Western Futurista e fantasia são os meus favoritos</li>
            <li>Gosto muito de animes de comédia</li>
            <li>Eu tento ser um cara maneiro (Soul - Soul Eater)</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;