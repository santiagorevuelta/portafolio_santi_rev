import './HomeLayout.css'
import AnimationReveal from './AnimationReveal'


export default function HomeLayout(){

    AnimationReveal()
    return(
        <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">Hola, soy</span>
                        <h1 className="home__name">Santiago Revuelta</h1>
                        <h3 className="home__education">
                            Desarrollador Full Stack · IA & Automatizaciones
                            <span className="home__company">CEO & Fundador de <a href="https://www.serisas.com" target="_blank" rel="noreferrer">SERI S.A.S.</a></span>
                        </h3>
                        <div className="home__button">
                            <a download="" href="assets/pdf/Santiago Revuelta.pdf" className="button button--ghost">
                                Descargar CV
                            </a>
                            <a href="#about" className="button">Acerca de mí</a>
                        </div>
                    </div>
                    <div className="home__handle">
                        <img src="assets/img/me.png" alt="Santiago Revuelta - Desarrollador Full Stack especializado en IA y automatización" className="home__img" fetchPriority="high"/>
                    </div>
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/santiago-revuelta-rodriguez-8931a41a6/" target="_blank" className="home__social-link" rel="noreferrer" aria-label="Perfil de LinkedIn de Santiago Revuelta">
                            <i className='bx bxl-linkedin-square' aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/santiagorevuelta" target="_blank" className="home__social-link" rel="noreferrer" aria-label="Perfil de GitHub de Santiago Revuelta">
                            <i className='bx bxl-github' aria-hidden="true"></i>
                        </a>
                    </div>
                    {/*<a href="#about" className="home__scroll">*/}
                    {/*    <i className='bx bx-mouse home__scroll-icon' ></i>*/}
                    {/*    <span className="home__scroll-name">Desliza abajo</span>*/}
                    {/*</a>*/}
                </div>
            </section>
    )
}
