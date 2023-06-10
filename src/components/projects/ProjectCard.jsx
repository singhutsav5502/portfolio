import './ProjectCard.css'


const ProjectCard = (props)=>{
    return(
        <>
        <img src={props.image} alt="" class="project-image" draggable="false" />
        </>
    )
}

export default ProjectCard;