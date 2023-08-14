import { Link } from "react-router-dom";
import { TLinkWithIcon } from "../../interfacesAndTypes";
import "./LinkWithIcon.scss";

const LinkWithIcon = ({ linkText }: TLinkWithIcon) => {
    return (
        <Link to='' className="link">
            <span className="link__text">{linkText}</span>
            <div className="link__circle"></div>
            <img className="link__icon" src="/images/icons/arrow.png" alt="arrow" />
        </Link>
    );
};

export default LinkWithIcon;