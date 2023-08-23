import { Link } from "react-router-dom";
import { navigation } from "../../data";
import Container from "../container/Container";
import Socials from "../socials/Socials";
import Logo from "../logo/Logo";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__top-row">
                    <Logo light />

                    <div className="footer__navigation">
                        {
                            navigation.map(item => {
                                return (
                                    <Link key={item.id} to={item.path} className="footer__navigation-link">{item.name}</Link>
                                )
                            })
                        }
                    </div>

                    <Socials light />
                </div>


                <div className="footer__bottom-row">
                    <div className="subscribe">
                        <p className="subscribe__text">Subscribe now</p>

                        <form className="subscribe__form">
                            <input className="subscribe__input" type="text" placeholder="Enter Your Email" />
                            <button className="subscribe__button" type="submit">
                                <img className="subscribe__button-icon" src="/images/icons/arrow.png" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;