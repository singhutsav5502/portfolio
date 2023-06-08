import './skills.css';
import SkillCard from './skillCard';
import { useLayoutEffect } from 'react';
const Skills = () => {

    return (
        <>

            <div className="skills-container" id="skills">
                <div className="skills-container-title">SKILLS</div>
                {/* <div className="skills-grid-maker"> */}
                <SkillCard title="HTML 5" logo="./HTML5.png">
                    {/* HTML5 is a markup language used for structuring and presenting content on the World Wide Web. */}
                </SkillCard>
                <SkillCard title="CSS 3" logo="./CSS3.png">
                    {/* CSS is a style sheet language used for describing the presentation of a document written in a markup language. */}
                </SkillCard>
                <SkillCard title="Javascript" logo="./JS.png">
                    {/* HTML5 is a markup language used for structuring and presenting content on the World Wide Web. */}
                </SkillCard>
                <SkillCard title="React JS" logo="./React.png">
                    {/* HTML5 is a markup language used for structuring and presenting content on the World Wide Web. */}
                </SkillCard>
                <SkillCard title="C++" logo="./CPP.png">
                    {/* HTML5 is a markup language used for structuring and presenting content on the World Wide Web. */}
                </SkillCard>
                {/* </div> */}
            </div>
        </>
    )
}
export default Skills;