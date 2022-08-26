import './AboutLayout.css'
export default function AboutLayout(){
    return (
        <section className="about section" id="about">
                <span className="section__subtitle">Presentación</span>
                <h2 className="section__title">Acerca de mí</h2>
                <div className="about__container container grid">
                    <img src="assets/img/logo.png" alt="" className="about__img"/>
                    <div className="about__data">
                        <div className="about__info">
                            <div className="about__box">
                                <i className='bx bx-award about__icon'></i>
                                <h3 className="about__title">Experiencia</h3>
                                <span className="about__subtitle">4 Años Trabajando</span>
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
                            Desarrollador Full Stack, He diseñado y construido sistemas de información con requisitos específicos de los clientes,
                            Poseo 4 años de experiencia en desarrollo y soporte de software.
                        </p>
                        <a href="#contact" className="button">Contactame</a>
                    </div>
                </div>
            </section>
    )
}
