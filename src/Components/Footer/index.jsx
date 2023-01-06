import styled from "styled-components";
import NavBar from "../NavBar";

const StyledFooter = styled.footer`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const EmptyDiv = styled.div`
    
`

const TagDiv = styled.div`
    font-size: 6rem;
    margin-bottom: 1vw;
`

export default function Footer() {
    return (
        <StyledFooter>
            <EmptyDiv></EmptyDiv>
            <ContentDiv>
                <NavBar />
                <p>Copyright © 2022 Michael Rocha Nunes</p>
            </ContentDiv>
            <TagDiv>&lt;&#47;&gt;</TagDiv>

        </StyledFooter>
    )
}