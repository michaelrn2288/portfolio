import styled from "styled-components";
import NavBar from "../NavBar";

const StyledHeader = styled.header`
    height: ${ props => props.headerHeight }vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: beige;
`

export default function Header(props) {
const { headerHeight } = props

    return (
        <StyledHeader headerHeight={headerHeight} >
            <h1>Michael Rocha Nunes</h1>
            <NavBar />
        </StyledHeader>
    )
}