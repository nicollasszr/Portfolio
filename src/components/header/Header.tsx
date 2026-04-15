import './Header.css'
import NavigationButton from "../NavigationButton";

export default function Header(){

    
    return(


        <header className="main-header">

            <nav>
                <ul>
                    <li className="NavButton"><NavigationButton path={"/"} name={"Home"}/></li>
                    <li className="NavButton"><NavigationButton path={"/about"} name={"About"}/></li>
                    <li className="NavButton"><NavigationButton path={"/projects"} name={"Projects"}/></li>
                    <li className="NavButton"><NavigationButton path={"/contact"} name={"Contact"}/></li>
                </ul>
            </nav>

        </header>

    )

}