import './FooterLayout.css'
export default function FooterLayout(){
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <h1 className="footer__title">Santi.Rev</h1>
                        <img src="assets/img/logo_black.png" alt="" className="footer__logo"/>
                    </div>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">Acerca de mí</a>
                        </li>
                        <li>
                            <a href="#experience" className="footer__link">Proyectos</a>
                        </li>
                        <li>
                            <a href="#testimonial" className="footer__link">Contacto</a>
                        </li>
                    </ul>

                    <ul className="footer__social">
                        <a href="https://web.facebook.com/Santi.rev.r" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-facebook' ></i>
                        </a>
                        <a href="https://www.instagram.com/santi.rev/" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-instagram' ></i>
                        </a>
                        <a href="https://twitter.com/SantiRev_" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-twitter' ></i>
                        </a>
                    </ul>
                </div>

                <span className="footer__copy">
                    &#169; Santi.Rev. Todos los derechos reservados
                </span>
            </div>
        </footer>
    )
}
