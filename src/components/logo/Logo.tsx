import { Link } from "react-router-dom";
import { TLight } from "../../interfacesAndTypes";
import "./Logo.scss";

const Logo = ({ light }: TLight) => {
    return (
        <Link to='/'>
            <div className="logo">
                <span className={`logo__text ${light && 'logo__text--light'}`}>world news</span>
            </div>
        </Link>
    );
};

export default Logo;