import { projects } from "../../projects";


export default function ProjectCard(props) {

    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.image} />
            <p>{ props.description }</p>
            <p>{ props.pageUrl }</p>
            <p>{ props.projectUrl }</p>
        </div>
    )
}