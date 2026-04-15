import data from '../../../public/assets/project_data.json';
import Header from '../../components/header/Header';
import ProjectCard from '../../components/projectCard/ProjectCard';
import './Projects.css'
import NavigationButton from '../../components/NavigationButton';
import '../../components/NavigationSideButton.css'

export default function Projects(){
    return(
        <main className="projects-page">
            <Header/>
            <section className="projects-section">

                <NavigationButton 
                                        path="/about" 
                                        name={<img src="../../../assets/pointing_right.svg" />} 
                                        className="nav-side-button nav-side-button--left"
                />

                <h1 className="projects-section__title">Projetos</h1>
                <div className="projects-section__wrapper">
                    <ul className="projects-section__grid">
                        {data.map((project: any, index: any) => (
                            <li key={index} className="projects-section__item">
                                <ProjectCard 
                                    title={project.title} 
                                    image={project.image} 
                                    stack={project.stack} 
                                    description={project.description} 
                                    github={project.github} 
                                    trial={project.trial}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <NavigationButton 
                                        path="/contact" 
                                        name={<img src="../../../assets/pointing_right.svg" />} 
                                        className="nav-side-button nav-side-button--right"
                />

            </section>
        </main>
    )
}