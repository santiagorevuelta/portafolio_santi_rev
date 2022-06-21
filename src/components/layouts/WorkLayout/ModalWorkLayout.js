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

                        {/* <ul className="work__modal-list">
                            <li className="work__modal-item">
                                <i className='bx bx-check work__modal-icon' ></i>
                                <p className="work__modal-info">
                                    Desarrollo de interfaz de usuario.
                                </p>
                            </li>

                            <li className="work__modal-item">
                                <i className='bx bx-check work__modal-icon' ></i>
                                <p className="work__modal-info">
                                    Desarrollo de sistemas de información.
                                </p>
                            </li>
                        </ul> */}
                    </div>
                </div>
    )
}