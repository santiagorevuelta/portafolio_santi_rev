import './CardWork.css'
export default function CardWork({title, typeProject, typeInfoProject, projectURL, img}){
    const imgRute = "assets/img/" + (img.includes('.')? img:img +".jpg")
    const classCard = `work__card mix ${typeProject}`
    return(
        <div className={classCard}>
            <img src={imgRute} alt={title} className="work__img"/>
            <h3 className="work__title">{title}</h3>
            <a href={projectURL} className="work__button" target={projectURL.includes('http')?'_blank':''}>
                {typeInfoProject} <i className='bx bx-right-arrow-alt work__icon' ></i>
            </a>
        </div>
    )
}
