/* ProjectCard.tsx */
import './ProjectCard.css'

type props = {
    title: string,
    image: string,
    stack: string[],
    description: string,
    github: string | null,
    trial: string | null
}

export default function ProjectCard({ title, image, stack, description, github, trial }: props) {
    return (
        <div className="project-card">
            <div>
                <h1>{title}</h1>
            </div>
            
            <section className="image-container">
                <img src={image} alt={`${title}'s image`} />
            </section>

            <main>
                <div className="info-section">
                    <h2>Stack</h2>
                    <ul className="stack-list">
                        {stack.map((tech, index) => (
                            <li className="stack-tech" key={index}>{tech}</li>
                        ))}
                    </ul>
                    
                    <h2>Descrição</h2>
                    <div className="description-field">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="button-container">
                    {github && <a className="button-code" href={github} target="_blank" rel="noreferrer">GitHub</a>}
                    {trial && <a className="button-demo" href={trial} target="_blank" rel="noreferrer">Acessar</a>}
                </div>
            </main>
        </div>
    )
}