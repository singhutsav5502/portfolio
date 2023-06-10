import './Project.css'
import ProjectCard from './ProjectCard';
import { useLayoutEffect } from 'react';
const Project = (props) => {
    useLayoutEffect(() => {
        const track = document.getElementById("project-image-track")
        window.onmousedown = e => {
            //store location of mouse on click
            track.dataset.mouseDownAt = e.clientX;
        }

        window.onmousemove = e => {
            if (track.dataset.mouseDownAt === "0") return; // make sure nothing happens when mouse is not moved
            //calculate distance mouse moved
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2; // By the time 50% is travelled we want to completely pan it from one end to another

            const percentage = (mouseDelta / maxDelta) * (-100); // Calculate Percentage change in position
            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
            nextPercentage = Math.min(0, nextPercentage);
            nextPercentage = Math.max(nextPercentage, -100)
            track.dataset.percentage = nextPercentage; // Used as a buffer to store latest percentage stored
            // track.style.transform = `translate(${nextPercentage}% , -50%)`; use animations for smoothness
            track.animate({
                transform: `translate(${nextPercentage}% , -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of track.getElementsByClassName("project-image")) {
                // image.style.objectPosition=`${nextPercentage + 100} 50%`; use animations for smoothness
                image.animate({
                    objectPosition: `${nextPercentage + 100}% 50%`
                }, { duration: 1200, fill: "forwards" });
            }

        }
        window.onmouseup = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage; // on release update the percentage that has been slid so far
        }


    })
    return (
        <>
            <div className="project-bar-container">
                <div id="project-image-track" data-mouse-down-at="0" data-prev-percentage="0" data-percentage="0">
                    <ProjectCard image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                        github="https://github.com/singhutsav5502/TodoCRUD" title="Todo CRUD app" />
                    <ProjectCard image="https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                        github="https://github.com/singhutsav5502/React-SpotifyClone" title="React Spotify Clone" />
                    <ProjectCard image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        github="https://github.com/singhutsav5502/react-expense-tracker" title="React Expense Tracker" />
                    <ProjectCard image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                        github="https://github.com/singhutsav5502/react-weather-forecast" title="Weather Forecast app" />
                    <ProjectCard image="https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                        github="https://github.com/singhutsav5502/react-tic-tac-toe" title="Tic Tac Toe" />
                </div>
            </div>
        </>
    )
}
export default Project;