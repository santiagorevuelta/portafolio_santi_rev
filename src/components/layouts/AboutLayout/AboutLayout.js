import './AboutLayout.css'
export default function AboutLayout(){
    return (
        <section className="about section" id="about">
                <span className="section__subtitle">Presentación</span>
                <h2 className="section__title">Sobre Santiago Revuelta - Desarrollador Full Stack</h2>
                <div className="container">
                    {/*about__container container grid*/}
                    {/*<img src="assets/img/me2.jpg" alt="" className="about__img"/>*/}
                   <div className={'item-center center'}>
                       <div className="about__data">
                           <div className="about__info" style={{justifyContent: 'center'}}>
                               <div className="about__box">
                                   <i className='bx bx-award about__icon'></i>
                                   <h3 className="about__title">Experiencia</h3>
                                   <span className="about__subtitle">6+ Años Trabajando</span>
                               </div>

                               <div className="about__box">
                                   <i className='bx bx-rocket about__icon' ></i>
                                   <h3 className="about__title">Impacto</h3>
                                   <span className="about__subtitle">10+ Deploys</span>
                               </div>

                               <div className="about__box">
                                   <i className='bx bx-group about__icon' ></i>
                                   <h3 className="about__title">Alcance</h3>
                                   <span className="about__subtitle">200K+ Usuarios</span>
                               </div>
                           </div>
                           <p className="about__description">
                               Soy un Desarrollador Full Stack con más de 6 años de trayectoria, apasionado por crear soluciones tecnológicas escalables y de alto impacto. Mi experiencia abarca desde el liderazgo técnico en el desarrollo de billeteras digitales para el sector bancario internacional hasta la implementación de sistemas de información geográfica (SIG) complejos.
                           </p>
                           <p className="about__description">
                               He trabajado en entornos ágiles (Scrum) y bajo estándares de alta calidad, destacando mi capacidad para diseñar arquitecturas limpias y mantenibles. Me especializo en ecosistemas JavaScript/TypeScript (React, Node.js, React Native), Java y bases de datos robustas como PostgreSQL y Oracle. Mi enfoque se centra en optimizar procesos, garantizar la seguridad de la información y ofrecer una experiencia de usuario excepcional, tanto en aplicaciones web como móviles publicadas en App Store y Play Store.
                           </p>
                           <a href="#contact" className="button">Contactame</a>
                       </div>
                   </div>
                </div>
            </section>
    )
}
