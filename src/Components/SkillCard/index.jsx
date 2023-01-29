import styled from "styled-components"
import { skills } from "../../skills"


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(
        var(--hue-secondary2),
        var(--saturation-default),
        var(--light-p60)
    );
    border-radius: 15px;
    border: 6px solid hsl(
        var(--hue-primary),
        var(--saturation-m45),
        var(--light-inverted-m90)
    );
    font-size: 1.3rem;
    width: 150px;
    height: 170px;
    -moz-background-clip: padding; 
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    background-color: hsl(
        var(--hue-primary),
        var(--saturation-default),
        var(--light-inverted-m90)
    );
    padding: 0.4rem;
    width: 100%;
`

const StyledH3 = styled.h3`
    font-weight: 400;
    color: hsl(
        var(--hue-secondary2),
        var(--saturation-default),
        var(--light-p45)
    );
`

const StyledImgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledImg = styled.img`
    width: 5rem;
    background-color: rgba(112, 112, 112, 0.5);
    box-shadow: 9px 0 9px rgba(112, 112, 112, 0.5),
                0 9px 9px rgba(112, 112, 112, 0.5),
                -9px 0 9px rgba(112, 112, 112, 0.5),
                0 -9px 9px rgba(112, 112, 112, 0.5);
`

export default function SkillCard(props) {

    return (
        <StyledCard>
            <StyledHeader>
                <StyledH3>{skills[props.index].name}</StyledH3>
            </StyledHeader>
            <StyledImgContainer>
                <StyledImg src={skills[props.index].icon} />
            </StyledImgContainer>
        </StyledCard>
    )
}