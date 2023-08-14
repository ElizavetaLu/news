import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { topics } from "../../data";
import Container from "../container/Container";
import "./Header.scss";
import Logo from "../logo/Logo";


const Header = () => {

    const [viewMore, toggle] = useToggle();

    return (
        <Container>
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__left-side">
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/icons/menu.png" alt="Menu" />
                        </button>
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/icons/search.png" alt="Search" />
                        </button>
                    </div>

                    <Logo />
                    
                    <div className="header__right-side">
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/socials/twitter.png" alt="Twitter" />
                        </button>
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/socials/facebook.png" alt="Facebook" />
                        </button>
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/socials/instagram.png" alt="Instagram" />
                        </button>
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/socials/youtube.png" alt="Youtube" />
                        </button>
                    </div>
                </div>

                <nav className="navigation">
                    <div className="navigation__list">
                        {
                            topics.slice(0, 9).map(item => {
                                return (
                                    <Link key={item} to='' className="navigation__list-item">{item}</Link>
                                )
                            })
                        }

                    </div>

                    <div className={`navigation__list ${!viewMore && 'navigation__list--hidden'}`}>
                        {
                            topics.slice(9).map(item => {
                                return (
                                    <Link key={item} to='' className="navigation__list-item">{item}</Link>
                                )
                            })
                        }
                    </div>
                    <button className={`navigation__btn ${viewMore && 'navigation__btn--reverse'}`} onClick={toggle}>
                        <span className="navigation__btn-text">{viewMore ? 'Hide' : 'More'}</span>
                        <img className={`navigation__btn-icon ${viewMore && 'navigation__btn-icon--rotate'}`} src="/images/icons/double-down.png" alt="" />
                    </button>
                </nav>
            </header>
        </Container>
    );
};

export default Header;