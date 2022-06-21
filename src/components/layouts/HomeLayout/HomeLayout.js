import './HomeLayout.css'
// import imgPerfil from '../../../assets/img/perfil.png'
import AnimationReveal from './AnimationReveal'


export default function HomeLayout(){

    AnimationReveal()
    return(
        <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">Hola, soy</span>
                        <h1 className="home__name">Ivan Rojas</h1>
                        <h3 className="home__education">Desarrollador Full Stack</h3>
                        <div className="home__button">
                            <a download="" href="assets/pdf/CV-Ivan-Rojas.pdf" className="button button--ghost">
                                Descargar CV
                            </a>
                            <a href="#about" className="button">Acerca de mí</a>
                        </div>
                    </div>                    
                    <div className="home__handle">
                        <img src="assets/img/perfil.png" alt="" className="home__img"/>
                    </div>
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/ifrojas27/" target="_blank" className="home__social-link" rel="noreferrer">
                            <i className='bx bxl-linkedin-square' ></i>
                        </a>
                        <a href="https://github.com/ifrojas" target="_blank" className="home__social-link" rel="noreferrer">
                            <i className='bx bxl-github' ></i>
                        </a>
                        {/* <a href="https://www.dribble.com/" target="_blank" className="home__social-link" rel="noreferrer">
                            <i className='bx bxl-dribbble' ></i>
                        </a> */}
                    </div>
                    <a href="#about" className="home__scroll">
                        <i className='bx bx-mouse home__scroll-icon' ></i>
                        <span className="home__scroll-name">Desliza abajo</span>
                    </a>
                </div>
            </section>
    )
}