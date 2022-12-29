import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className={`${props.placement} nav-bar`}>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/projects'>PROJETOS</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTATO</Link>
                </li>
            </ul>
        </nav>
    )
}