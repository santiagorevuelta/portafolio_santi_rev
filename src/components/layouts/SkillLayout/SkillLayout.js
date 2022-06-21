import './SkillLayout.css'
export default function SkillLayout(){
    return (
        <section className="skills section" id="skills">
                <span className="section__subtitle">Mis Habilidades</span>
                <h2 className="section__title">Mi Experiencia</h2>

                <div className="skills__container container grid">
                    <div className="skills__content">
                        <h3 className="skills__title">Desarrollo Frontend</h3>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__level">Avanzado</span>
                                    </div>
                                </div>

                               
                                
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Javascript</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Bootstrap</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Git</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="skills__content">
                        <h3 className="skills__title">Desarrollo Backend</h3>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">PHP</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Node JS</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Java</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="skills__group">
                            <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">Oracle</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">MySQL</h3>
                                        <span className="skills__level">Intermedio</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className='bx bx-badge-check' ></i>
                                    <div>
                                        <h3 className="skills__name">ASP .NET</h3>
                                        <span className="skills__level">Avanzado</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}