import './ProjectCard.css'


const ProjectCard = (props) => {
    return (
        <>
            <section className="project-card">
                <img src={props.image} alt="" className="project-image" draggable="false" />
                <section className="project-image-description" draggable="false">
                    <a href={props.github} ><img src="./logo.svg" alt="" /></a>
                    <p>{props.title}</p>
                </section>
            </section>
        </>
    )
}

export default ProjectCard;