import styled from "styled-components";
import { contacts } from "../../contacts";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 1.4rem;
`

const Img = styled.img`
    border-radius: 50%;
    width: 100px;
`

export default function ContactCard(props) {

    return(
        <StyledDiv>
            <a href={props.href} target="_blank" >
                <Img src={props.image} />
            </a>
            {props.description}
        </StyledDiv>
    )
}