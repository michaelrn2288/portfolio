import { projects } from "../../projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {

    const projectCards = projects.map( (project, index) => {
        return (
            <ProjectCard
                name={ projects[index].name }
                image={ projects[index].image }
                description={ projects[index].description }
                pageUrl={ projects[index].pageUrl }
                projectUrl={ projects[index].projectUrl }
                key={index}
            />
        )
    } )

    return (
        <>
            <div>
                {projectCards}
            </div>
        </>
    )
}