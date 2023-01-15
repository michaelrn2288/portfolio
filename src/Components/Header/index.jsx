import styled from "styled-components";
import NavBar from "../NavBar";

const StyledHeader = styled.header`
    height: ${props => props.headerHeight}vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    color: hsla(
        var(--hue-contrast),
        var(--saturation-100),
        var(--light-inverted-050),
        1);
    background-color: hsla(
        var(--hue-secondary2),
        var(--saturation-100),
        var(--light-150),
        1);
`

const FirstSection = styled.section`
    display: flex;
    align-items: center;
    gap: 25px;
`

const TagDiv = styled.div`
    font-size: 6rem;
    margin-bottom: 1vw;
`

export default function Header(props) {
    const { headerHeight } = props

    return (
        <StyledHeader headerHeight={headerHeight} >
            <FirstSection>
                <TagDiv>&lt;&gt;</TagDiv>
                <h1>Michael Rocha Nunes</h1>
            </FirstSection>
            <NavBar />
        </StyledHeader>
    )
}