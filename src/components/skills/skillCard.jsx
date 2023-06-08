import './skillCard.css'
const SkillCard = (props)=>{
    return(
        <>
            <div className="skillCard-container">

                <div className="skillCard-image">
                    <img src={`${props.logo}?sanitize=true`} alt="" />
                </div>
                <div className="skillCard-title">
                    {props.title}
                </div>
                <div className="skillCard-info">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default SkillCard;