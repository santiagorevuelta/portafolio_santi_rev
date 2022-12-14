import './FooterLayout.css'
export default function FooterLayout(){
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Santi.Rev</h1>
                <ul className="footer__list">
                    <img src="assets/img/logo_black.png" alt="" className="logo__img"/>
                </ul>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Acerca de mí</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Proyectos</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonios</a>
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

                <span className="footer__copy">
                    &#169; Santi.Rev. Todos los derechos reservados
                </span>
            </div>
        </footer>
    )
}
