import styled from "styled-components"
import { skills } from "../../skills"


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    font-size: 1.5rem;
    overflow: hidden;
    width: 150px;

`

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 1rem;
    width: 100%;
`

const StyledImg = styled.img`
    width: 5rem;
`

export default function SkillCard(props) {

    return (
        <StyledCard>
            <StyledHeader>
                <h3>{skills[props.index].name}</h3>
            </StyledHeader>
            <StyledImg src={skills[props.index].icon} />
        </StyledCard>
    )
}