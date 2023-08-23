import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { topics } from "../../data";
import Container from "../container/Container";
import Socials from "../socials/Socials";
import Logo from "../logo/Logo";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/actions/actionCreators";
import Sidebar from "./sidebar/Sidebar";



const Header = () => {


    const dispatch = useDispatch();
    const [viewMore, toggle] = useToggle();


    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <div className="header__left-side">
                        <button className="header__button" onClick={() => dispatch(showSidebar())}>
                            <img className="header__button-icon" src="/images/icons/menu.png" alt="Menu" />
                        </button>
                        <button className="header__button">
                            <img className="header__button-icon" src="/images/icons/search.png" alt="Search" />
                        </button>
                    </div>

                    <Logo />

                    <Socials />
                </div>

                <nav className="navigation">
                    <div className="navigation__list">
                        {
                            topics.slice(0, 9).map(item => {
                                return (
                                    <Link key={item} to={`topic/${item}`} className="navigation__list-item">{item}</Link>
                                )
                            })
                        }

                    </div>

                    <div className={`navigation__list ${!viewMore && 'navigation__list--hidden'}`}>
                        {
                            topics.slice(9).map(item => {
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

            <Sidebar/>
        </header>
    );
};

export default Header;