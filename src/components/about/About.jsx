import "./About.css"

const About = () => {
    return (
        <>
            <div className="about-container" id="about">
                <div className="about-left-container">
                    <img src="./aboutHero.jpg" alt="" />
                </div>
                <div className="about-right-container">
                    <h2 className="about-name title">Hello there! I'm Utsav Singh.</h2>
                    <p className="about-para subtitle">I'm a first-year B.Tech student at NSUT,also a frontend developer who loves creating visually stunning and user-friendly websites.</p>
                    <div className="about-icon-container">
                        <a href="https://github.com/singhutsav5502" target="_blank"><img src="./logo.png" alt="" className="about-icons" /></a>
                        <a href="https://www.linkedin.com/in/utsav-work/" target="_blank"><img src="./linkedIn.svg" alt="" className="about-icons" id="linkedIn" /></a>
                        <a href="mailto:singhutsavofficial@gmail.com" target="_blank"><img src="./mail.png" alt="" className="about-icons" id="leetcode" /></a>
                        <a href="https://twitter.com/uts5501" target="_blank"><img src="./twitter.svg" alt="" className="about-icons" id="twitter" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default About;