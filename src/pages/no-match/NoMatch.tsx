import { Link } from "react-router-dom";
import "./NoMatch.scss";

const NoMatch = () => {
    return (
        <main className="no-match">
            <div className="no-match__error-code">
                <h1 className="no-match__error-number">4</h1>
                <img className="no-match__error-image" src="/images/semi-moon.png" alt="" />
                <h1 className="no-match__error-number">4</h1>
            </div>

            <div className="no-match__message">
                <p className="no-match__message-text">We're sorry, it looks like the page you're looking for isn't in our system...</p>
                <Link to='/' className="no-match__message-link">Back Home</Link>
            </div> 
        </main>
    );
};

export default NoMatch;