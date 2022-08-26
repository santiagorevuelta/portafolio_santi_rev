import ModalService from './ModalService'
import './ServiceLayout.css'
export default function ServiceLayout(){

    ModalService()
    return (
        <section className="services section">
        <span className="section__subtitle">Mi servicio</span>
        <h2 className="section__title">Lo que ofrezco</h2>

        <div className="services__container container grid">
            <div className="services__card">
                <h3 className="services__title">Diseño de <br/> Productos</h3>

                <span className="services__button">
                    Ver mas <i className='bx bx-right-arrow-alt services__icon' ></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className='bx bx-x services__modal-close' ></i>

                        <h3 className="services__modal-title">Diseño de Productos</h3>
                        <p className="services__modal-description">
                            Servicio con más de 2 años de experiencia.
                            Proporcionando un trabajo de calidad a clientes y empresas.
                        </p>

                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Desarrollo de interfaz de usuario.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Desarrollo de sistemas de información.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Desarrollo de paginas web.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Interacciones de elementos UX.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Diseño de productos.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__card">
                <h3 className="services__title">Sistemas <br/> Integrados</h3>

                <span className="services__button">
                    Ver mas <i className='bx bx-right-arrow-alt services__icon' ></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className='bx bx-x services__modal-close' ></i>

                        <h3 className="services__modal-title">Sistemas Integrados</h3>
                        <p className="services__modal-description">
                            Servicio con más de 1 años de experiencia.
                            Integrando multiples API y servicios.
                        </p>

                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Servicios de autenticación.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    Servicios AZURE.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    API de mapas integrados.
                                </p>
                            </li>

                            <li className="services__modal-item">
                                <i className='bx bx-check services__modal-icon' ></i>
                                <p className="services__modal-info">
                                    DOCKER
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
