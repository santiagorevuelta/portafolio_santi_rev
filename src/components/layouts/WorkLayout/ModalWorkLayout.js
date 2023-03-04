export default function ModalWorkLayout({title, description, typeProject}){
    const classCard = `work__card mix ${typeProject}`
    return(
        <div className="work__modal">
                    <div className="work__modal-content">
                        <i className='bx bx-x work__modal-close' ></i>
                        <h3 className="work__modal-title">{title}</h3>
                        <p className="work__modal-description">
                        {description}
                        </p>
                    </div>
                </div>
    )
}
