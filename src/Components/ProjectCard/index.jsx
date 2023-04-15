import styled from "styled-components";
import { projects } from "../../projects";

const Card = styled.div`
display: flex;
flex-direction: column;
width: 700px;
background-color: rgba(0,0,0,0.5);
padding: 28px;
margin: 14px;
border-radius: 7px;
`

const H3 = styled.h3`
align-self: center;
font-size: 1.6rem;
`

const Img = styled.img`
padding: 10px;
`

const P = styled.p`
margin: 18px 12px;
`

const LinksContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`

const A = styled.a`
font-weight: 600;
border: 1px solid yellow;
display: inline-block;
padding: 20px 20px;
border-radius: 40px;
&:hover{
    text-decoration: underline;
}
`

export default function ProjectCard(props) {

    return (
        <Card>
            <H3>{props.name}</H3>
            <Img src={props.image} />
            <P>{ props.description }</P>
            <LinksContainer>
                <A href={props.pageUrl} target="_blank" type="button">Visitar página</A>
                <A href={props.projectUrl} target="_blank" type="button">Ver projeto no Github</A>
            </LinksContainer>
        </Card>
    )
}