import SelectTheme from './SelectTheme'
import ScrollActive from './ScrollActive'
import './HeaderLayout.css'
export default function HeaderLayout(){
    ScrollActive()
    const changeTheme = (event) =>{
        SelectTheme()
    }
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Santi.Rev</a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className='bx bx-home-alt'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='bx bx-user' ></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='bx bx-book' ></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                <i className='bx bx-briefcase-alt-2' ></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className='bx bx-message-square-detail'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- Theme change button --> */}
                <i className='bx bx-moon change-theme' id="theme-button" onClick={changeTheme()}></i>
            </nav>
        </header>
    )
}
