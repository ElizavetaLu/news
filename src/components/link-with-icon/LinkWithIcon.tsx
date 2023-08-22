import { Link } from "react-router-dom";
import { ILinkWithIcon } from "../../interfacesAndTypes";
import "./LinkWithIcon.scss";

const LinkWithIcon = ({ linkText, navigation }: ILinkWithIcon) => {
    return (
        <Link to={navigation} className="link">
            <span className="link__text">{linkText}</span>
            <div className="link__circle"></div>
            <img className="link__icon" src="/images/icons/arrow.png" alt="arrow" />
        </Link>
    );
};

export default LinkWithIcon;