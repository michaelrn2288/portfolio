import styled from "styled-components";
import NavBar from "../NavBar";

const StyledHeader = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: beige;
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Michael Rocha Nunes</h1>
            <NavBar />
        </StyledHeader>
    )
}