import './skillCard.css'
const SkillCard = (props)=>{
    return(
        <>
            <div className="skillCard-container">

                <div className="skillCard-image">
                    <img src={`${props.logo}`} alt="" />
                </div>
                <div className="skillCard-title subtitle">
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