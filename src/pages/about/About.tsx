import Header from "../../components/header/Header";
import cv from "/public/assets/cv_nicollas.pdf";
import './About.css'
import NavigationButton from "../../components/NavigationButton";
import '../../components/NavigationSideButton.css'

export default function About() {
  return (
    <main className="about-page">
      <Header />
      <section className="about-container">

        <NavigationButton 
                        path="/" 
                        name={<img src="/public/assets/pointing_right.svg" />} 
                        className="nav-side-button nav-side-button--left"
        />

        <h1 className="about__title">Sobre mim</h1>

        <div className="about__content">
          {/* Coluna de Introdução e Formação */}
          <article className="about__bio-column">
            <div className="about__section">
              <h2 className="about__subtitle">Apresentação</h2>
              <p className="about__text">
                Sou estudante de engenharia de software e estou em fase de desenvolvimento como programador, explorando diferentes áreas da tecnologia. 
                Gosto do processo de transformar ideias em código, principalmente através de colaboração e construção de projetos próprios.
                Busco evoluir constantemente usando projetos como forma principal de consolidar conhecimento e melhorar minha lógica e organização de código, 
                com o objetivo de ganhar consistência e me tornar cada vez mais sólido no desenvolvimento.
              </p>
            </div>

            <div className="about__section">
              <h2 className="about__subtitle">Formação</h2>
              <div className="about__education-info">
                <h4 className="about__institution">Engenharia de Software - Ceulp/Ulbra</h4>
                <p className="about__date">2024/1 - 2027/2</p>
              </div>
            </div>

            <a href={cv} download="cv_nicollas.pdf" className="about__download-button"> 
              Baixar Currículo 
            </a>
          </article>

          {/* Coluna de Skills */}
          <aside className="about__skills-column">
            <div className="about__section">
              <h2 className="about__subtitle">Soft-Skills</h2>
              <ul className="about__soft-skills-list">
                <li className="about__soft-skill-item">Boa Comunicação</li>
                <li className="about__soft-skill-item">Resolução de problemas</li>
                <li className="about__soft-skill-item">Adaptabilidade</li>
                <li className="about__soft-skill-item">Trabalho em equipe</li>
              </ul>
            </div>

            <div className="about__section">
              <h2 className="about__subtitle">Hard-Skills</h2>

              <div className="about__skill-group">
                <h3 className="about__skill-category-title">Front-End</h3>
                <ul className="about__hard-skills-grid">
                  <li className="about__hard-skill-card" data-name="HTML">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
                  </li>
                  <li className="about__hard-skill-card" data-name="CSS">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                  </li>
                  <li className="about__hard-skill-card" data-name="JavaScript">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" />
                  </li>
                  <li className="about__hard-skill-card" data-name="TypeScript">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TS" />
                  </li>
                  <li className="about__hard-skill-card" data-name="React">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                  </li>
                </ul>
              </div>

              <div className="about__skill-group">
                <h3 className="about__skill-category-title">Back-End</h3>
                <ul className="about__hard-skills-grid">
                  <li className="about__hard-skill-card" data-name="Python">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                  </li>
                  <li className="about__hard-skill-card" data-name="Java">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                  </li>
                  <li className="about__hard-skill-card" data-name="PostgreSQL">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                  </li>
                  <li className="about__hard-skill-card" data-name="MongoDB">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  </li>
                </ul>
              </div>

              <div className="about__skill-group">
                <h3 className="about__skill-category-title">Ferramentas</h3>
                <ul className="about__hard-skills-grid">
                  <li className="about__hard-skill-card" data-name="Git">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                  </li>
                  <li className="about__hard-skill-card" data-name="GitHub">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                  </li>
                  <li className="about__hard-skill-card" data-name="Figma">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
                  </li>
                  <li className="about__hard-skill-card" data-name="Node.js">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  </li>
                  <li className="about__hard-skill-card" data-name="VS Code">
                    <img className="about__skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" />
                  </li>
                  <li className="about__hard-skill-card" data-name="KNIME">
                    <img className="about__skill-icon" src="/public/assets/knime-original.svg" alt="KNIME" />
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <NavigationButton 
                        path="/projects" 
                        name={<img src="/public/assets/pointing_right.svg" />} 
                        className="nav-side-button nav-side-button--right"
        />
      </section>

    </main>
  );
}