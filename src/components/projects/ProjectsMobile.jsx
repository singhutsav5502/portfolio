import ProjectCard from "./ProjectCard";
const ProjectsMobile = () => {
    return (
        <>
            <div className="projects-mobile-container">
                <div className="skills-container-title"><p className="skills-container-title-p title">PROJECTS</p></div>
                <div className="project-bar-container mobile">
                    <ProjectCard image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                        github="https://github.com/singhutsav5502/TodoCRUD" title="Todo CRUD app" class="projects-mobile" />
                    <ProjectCard image="https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                        github="https://github.com/singhutsav5502/React-SpotifyClone" title="React Spotify Clone" class="projects-mobile" />
                    <ProjectCard image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        github="https://github.com/singhutsav5502/react-expense-tracker" title="React Expense Tracker" class="projects-mobile" />
                    <ProjectCard image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                        github="https://github.com/singhutsav5502/react-weather-forecast" title="Weather Forecast app" class="projects-mobile" />
                    <ProjectCard image="https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                        github="https://github.com/singhutsav5502/react-tic-tac-toe" title="Tic Tac Toe" class="projects-mobile" />
                </div>
            </div>
        </>
    )
}
export default ProjectsMobile;