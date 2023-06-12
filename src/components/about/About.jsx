import "./About.css"

const About = ()=>{
    return(
        <>
        <div className="about-container" id="about">
            <div className="about-left-container">
                <img src="" alt="" />
            </div>
            <div className="about-right-container">
                <h2 className="about-name">Hello there! I'm Utsav Singh.</h2>
                <p className="about-para">I am a first year B.Tech student at NSUT and a frontend developer with a passion for crafting visually captivating and user-friendly websites.</p>
                <div className="about-icon-container">
                    <a href="#"><img src="#" alt="" className="about-icons" /></a>
                    <a href="#"><img src="#" alt="" className="about-icons" /></a>
                    <a href="#"><img src="#" alt="" className="about-icons" /></a>
                    <a href="#"><img src="#" alt="" className="about-icons" /></a>
                </div>
            </div>
        </div>
        </>
    )
}


export default About;