import styled from "styled-components";
import NavBar from "../NavBar";

const StyledFooter = styled.footer`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;;
    align-items: center;
    padding: 30px;
    gap: 20px;
`

export default function Footer() {
    return (
        <StyledFooter>
            <NavBar />
            <p>Copyright © 2022 Michael Rocha Nunes</p>
        </StyledFooter>
    )
}