import styled from "styled-components";
import { projects } from "../../projects";


export default function ProjectCard(props) {

    const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    `



    return (
        <Card>
            <h3>{props.name}</h3>
            <img src={props.image} />
            <p>{ props.description }</p>
            <p>Link da página: <a href={props.pageUrl} >{ props.pageUrl }</a></p>
            <p>Link do projeto no Github: <a href={props.projectUrl} >{ props.projectUrl }</a></p>
        </Card>
    )
}