
import './DetailCard.css'
export default function DetailCard({title, typeProject, typeInfoProject, projectURL, img}){
    return(
        <div className="services__card">
                <h3 className="services__title">Gestión<br/> DB</h3>

                <span className="services__button">
                    Ver mas <i className='bx bx-right-arrow-alt services__icon' ></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className='bx bx-x services__modal-close' ></i>

                        <h3 className="services__modal-title">Gestión de Bases de datos</h3>
                        <p className="services__modal-description">
                            Servicio con más de 3 años de experiencia.
                            Construyendo y administrando bases de datos para diferentes clientes y empresas.
                        </p>

                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Diseño relacional de Base de datos.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Procedimientos modelados eficientemente.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Protección de Inyección SQL.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
    )
}
