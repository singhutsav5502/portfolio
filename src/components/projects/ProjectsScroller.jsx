import { useLayoutEffect } from 'react'
import './ProjectsScroller.css'
import Project from './project'

const ProjectsScroller = () => {
    
    return (
        <>
            <div className="ProjectsScroller-container" id="ProjectsScroller">
                <div className="TextSplit-blur">
                    <div id="TextSplit-main">
                        <div id="TextSplit-top">
                            <h1 id="TextSplit-top-h">PROJECTS</h1>
                        </div>
                        <div id="TextSplit-center">
                            <div className="TextSplit-content">
                                {/* <h4> DOES IT WORK NOW!??? </h4> */}
                                <Project />
                            </div>
                        </div>
                        <div id="TextSplit-bottom">
                            <h1 id="TextSplit-bottom-h">PROJECTS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectsScroller