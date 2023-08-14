import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
    return (
        <Link to='home'>
            <div className="logo">
                <span className="logo__text">world news</span>
                {/* <span className="logo__text">news</span> */}
            </div>
        </Link>
    );
};

export default Logo;