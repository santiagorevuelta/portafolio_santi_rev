import React, { useState } from 'react'
import './ServiceLayout.css'

export default function ServiceLayout(){
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <span className="section__subtitle">Mi servicio</span>
            <h2 className="section__title">Lo que ofrezco</h2>

            <div className="services__container container grid">
                {/* SERVICIO IA */}
                <div className={`services__card ${toggleState === 4 ? 'services__card-active' : ''}`} onClick={() => toggleTab(toggleState === 4 ? 0 : 4)}>
                    <div className="services__card-content">
                        <i className='bx bx-bot services__icon-card'></i>
                        <h3 className="services__title">IA & Automatización</h3>

                        <span className="services__button">
                            {toggleState === 4 ? 'Ver menos' : 'Ver mas'} <i className={`bx ${toggleState === 4 ? 'bx-up-arrow-alt' : 'bx-right-arrow-alt'}`} ></i>
                        </span>
                    </div>

                    <div className={`services__info-container ${toggleState === 4 ? 'active-info' : ''}`}>
                        <p className="services__description">
                            Construyo agentes de IA y automatizaciones que atienden clientes,
                            califican leads y eliminan trabajo manual, listos para producción.
                        </p>

                        <ul className="services__list">
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Chatbots de WhatsApp con IA (texto y notas de voz).</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Agentes de voz que llaman y califican leads (Twilio + ElevenLabs).</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Automatización de procesos con n8n e integración de APIs.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Integración de LLMs (OpenAI) con datos del negocio (RAG).</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Escalación bot → asesor humano y paneles de control.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SERVICIO 1 */}
                <div className={`services__card ${toggleState === 1 ? 'services__card-active' : ''}`} onClick={() => toggleTab(toggleState === 1 ? 0 : 1)}>
                    <div className="services__card-content">
                        <i className='bx bx-layout services__icon-card'></i>
                        <h3 className="services__title">Diseño de Productos</h3>

                        <span className="services__button">
                            {toggleState === 1 ? 'Ver menos' : 'Ver mas'} <i className={`bx ${toggleState === 1 ? 'bx-up-arrow-alt' : 'bx-right-arrow-alt'}`} ></i>
                        </span>
                    </div>

                    <div className={`services__info-container ${toggleState === 1 ? 'active-info' : ''}`}>
                        <p className="services__description">
                            Servicio con más de 7 años de experiencia.
                            Proporcionando un trabajo de calidad a clientes y empresas.
                        </p>

                        <ul className="services__list">
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Desarrollo de interfaz de usuario.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Desarrollo de sistemas de información.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Desarrollo de paginas web.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Interacciones de elementos UX.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Diseño de productos.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SERVICIO 2 */}
                <div className={`services__card ${toggleState === 2 ? 'services__card-active' : ''}`} onClick={() => toggleTab(toggleState === 2 ? 0 : 2)}>
                    <div className="services__card-content">
                        <i className='bx bx-data services__icon-card'></i>
                        <h3 className="services__title">Gestión DB</h3>

                        <span className="services__button">
                            {toggleState === 2 ? 'Ver menos' : 'Ver mas'} <i className={`bx ${toggleState === 2 ? 'bx-up-arrow-alt' : 'bx-right-arrow-alt'}`} ></i>
                        </span>
                    </div>

                    <div className={`services__info-container ${toggleState === 2 ? 'active-info' : ''}`}>
                        <p className="services__description">
                            Servicio con más de 3 años de experiencia.
                            Construyendo y administrando bases de datos para diferentes clientes y empresas.
                        </p>

                        <ul className="services__list">
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Diseño relacional de Base de datos.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Diseño no relacional de Base de datos.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Procedimientos modelados eficientemente.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SERVICIO 3 */}
                <div className={`services__card ${toggleState === 3 ? 'services__card-active' : ''}`} onClick={() => toggleTab(toggleState === 3 ? 0 : 3)}>
                    <div className="services__card-content">
                        <i className='bx bx-code-alt services__icon-card'></i>
                        <h3 className="services__title">Sistemas Integrados</h3>

                        <span className="services__button">
                            {toggleState === 3 ? 'Ver menos' : 'Ver mas'} <i className={`bx ${toggleState === 3 ? 'bx-up-arrow-alt' : 'bx-right-arrow-alt'}`} ></i>
                        </span>
                    </div>

                    <div className={`services__info-container ${toggleState === 3 ? 'active-info' : ''}`}>
                        <p className="services__description">
                            Servicio con más de 1 años de experiencia.
                            Integrando multiples API y servicios.
                        </p>

                        <ul className="services__list">
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Servicios de autenticación.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">Servicios AZURE.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">API de mapas integrados.</p>
                            </li>
                            <li className="services__item">
                                <i className='bx bx-check services__icon' ></i>
                                <p className="services__info">DOCKER</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
