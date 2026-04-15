import Header from "../../components/header/Header";
import NavigationButton from "../../components/NavigationButton";
import './Home.css'
import '../../components/NavigationSideButton.css'

export default function Home(){
    return(
        <main className="home-page">
            <Header/>
            <section className="home-hero">    
                <div className="home-hero__content">
                    <h1 className="home-hero__title">Nicollas S. Rodrigues</h1>
                    <h2 className="home-hero__subtitle">Desenvolvedor de Software</h2>
                    <p className="home-hero__description">
                        Focado em aprender, construir e aprimorar habilidades em desenvolvimento de software
                    </p>
                </div>
                
                <hr className="home-hero__divider" />
                
                <nav className="home-hero__nav">
                    <NavigationButton 
                        path="/projects" 
                        name="Ver Projetos"
                        className="home-hero__btn home-hero__btn--primary"
                    />
                    <NavigationButton 
                        path="/contact" 
                        name="Entre em Contato"
                        className="home-hero__btn home-hero__btn--outline"
                    />
                </nav>
            </section>

            <NavigationButton 
                path="/about" 
                name={<img src="../../../assets/pointing_right.svg" />} 
                className="nav-side-button nav-side-button--right"
            />

            <footer className="home-footer">
                <p>Made by Nicollas</p>
            </footer>
        </main>
    )
}