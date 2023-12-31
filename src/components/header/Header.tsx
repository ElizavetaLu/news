import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/actions/actionCreators";
import useToggle from "../../hooks/useToggle";
import { topics } from "../../data";
import Container from "../container/Container";
import Socials from "../socials/Socials";
import Sidebar from "./sidebar/Sidebar";
import Logo from "../logo/Logo";
import "./Header.scss";



const Header = () => {

    const dispatch = useDispatch();
    const [viewMore, toggle] = useToggle();

    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <div className="header__left-side">
                        <button className="header__button-menu" onClick={() => dispatch(showSidebar())}>
                            <img className="header__button-icon" src="/images/icons/menu.png" alt="Menu" />
                        </button>
                        <Link to="search" className="header__button-search">
                            <img className="header__button-icon" src="/images/icons/search.png" alt="Search" />
                        </Link>
                    </div>

                    <Logo />

                    <div className="header__socials">
                        <Socials />
                    </div>
                    <Link to="search" className="header__button-mobile">
                        <img className="header__button-icon" src="/images/icons/search.png" alt="Search" />
                    </Link>
                </div>

                <nav className="navigation">
                    <div className="navigation__list">
                        {
                            topics.slice(0, 8).map(item => {
                                return (
                                    <Link key={item} to={`topic/${item}`} className="navigation__list-item">{item}</Link>
                                )
                            })
                        }

                    </div>

                    <div className={`navigation__list ${!viewMore && 'navigation__list--hidden'}`}>
                        {
                            topics.slice(8).map(item => {
                                return (
                                    <Link key={item} to={`topic/${item}`} className="navigation__list-item">{item}</Link>
                                )
                            })
                        }
                    </div>
                    <button className={`navigation__btn ${viewMore && 'navigation__btn--reverse'}`} onClick={toggle}>
                        <span className="navigation__btn-text">{viewMore ? 'Hide' : 'More'}</span>
                        <img className={`navigation__btn-icon ${viewMore && 'navigation__btn-icon--rotate'}`} src="/images/icons/double-down.png" alt="" />
                    </button>
                </nav>
            </Container>

            <Sidebar />
        </header>
    );
};

export default Header;