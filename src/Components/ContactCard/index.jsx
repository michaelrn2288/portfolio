import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 1.4rem;
    height: 130px;
    width: 500px;
`

const Img = styled.img`
    border-radius: 50%;
    width: 90px;
    transition: 0.15s;
    &:hover {
        width: 105px;
    }
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