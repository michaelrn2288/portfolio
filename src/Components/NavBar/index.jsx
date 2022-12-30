import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    background-color: lightcyan;
`

export default function NavBar() {
    return (
        <nav>
            <StyledUl>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/projects'>PROJETOS</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTATO</Link>
                </li>
            </StyledUl>
        </nav>
    )
}