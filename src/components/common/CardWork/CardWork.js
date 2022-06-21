import './CardWork.css'
export default function CardWork({title, typeProject, typeInfoProject, projectURL, img}){
    const imgRute = "assets/img/" + img + ".jpg"
    const classCard = `work__card mix ${typeProject}`
    return(
        <div className={classCard}>
                        <img src={imgRute} alt="" className="work__img"/>
                        <h3 className="work__title">{title}</h3>
                        <a href={projectURL} className="work__button">
                            {typeInfoProject} <i className='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
        </div>
    )
}