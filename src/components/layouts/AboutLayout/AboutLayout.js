import './AboutLayout.css'
export default function AboutLayout(){
    return (
        <section className="about section" id="about">
                <span className="section__subtitle">Presentación</span>
                <h2 className="section__title">Acerca de mí</h2>
                <div className="about__container container grid">
                    <img src="assets/img/me2.jpg" alt="" className="about__img"/>
                    <div className="about__data">
                        <div className="about__info">
                            <div className="about__box">
                                <i className='bx bx-award about__icon'></i>
                                <h3 className="about__title">Experiencia</h3>
                                <span className="about__subtitle">5 Años Trabajando</span>
                            </div>

                            <div className="about__box">
                                <i className='bx bx-briefcase-alt about__icon' ></i>
                                <h3 className="about__title">Completos</h3>
                                <span className="about__subtitle">5 + Proyectos</span>
                            </div>

                            <div className="about__box">
                                <i className='bx bx-support about__icon' ></i>
                                <h3 className="about__title">Desarrollo</h3>
                                <span className="about__subtitle">Full Stack</span>
                            </div>
                        </div>
                        <p className="about__description">
                            Soy desarrollador de software con 5 años de experiencia en el lenguaje de programación JAVA. También tengo experiencia creación de aplicaciones móviles usando tecnologías como React-native, Desarrollador web con manejo de Html5, Css3, JavaScript, Java, ReactJs, nodeJS, Oracle SQL, PostgreSQL y análisis de sistemas de información.
                            <br/><br/>
                            Creación de microservicios en nodeJS y contenidos en Docker publicándose en un servidor Azure.
                        </p>
                        <a href="#contact" className="button">Contactame</a>
                    </div>
                </div>
            </section>
    )
}
