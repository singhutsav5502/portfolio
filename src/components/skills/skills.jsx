import './skills.css';
import SkillCard from './skillCard';
import { useLayoutEffect } from 'react';
const Skills = () => {

    return (
        <>
            <div className="skills-container" id="skills">
                <div className="skills-grid-maker">
                    <SkillCard title="HTML 5" logo="/src/assets/HTML5_Logo.svg">
                        HTML5 is a markup language used for structuring and presenting content on the World Wide Web.
                    </SkillCard>
                    <SkillCard title="HTML 5" logo="/src/assets/HTML5_Logo.svg">
                        HTML5 is a markup language used for structuring and presenting content on the World Wide Web.
                    </SkillCard>
                    <SkillCard title="HTML 5" logo="/src/assets/HTML5_Logo.svg">
                        HTML5 is a markup language used for structuring and presenting content on the World Wide Web.
                    </SkillCard>
                    <SkillCard title="HTML 5" logo="/src/assets/HTML5_Logo.svg">
                        HTML5 is a markup language used for structuring and presenting content on the World Wide Web.
                    </SkillCard>
                </div>
            </div>
        </>
    )
}
export default Skills;