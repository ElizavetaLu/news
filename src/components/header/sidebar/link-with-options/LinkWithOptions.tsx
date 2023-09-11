import { Link } from "react-router-dom";
import useToggle from "../../../../hooks/useToggle";
import { INavigationLink } from "../../../../interfacesAndTypes";
import "./LinkWithOptions.scss";


const LinkWithOptions = ({ path, name, options, action }: INavigationLink) => {

    const [isActive, toggle] = useToggle();

    return (
        <div className="link-with-options">
            <Link
                to={path}
                className="sidebar__navigation-link"
                onClick={toggle}
            >
                {name}

                <img
                    className="sidebar__navigation-icon"
                    src="/images/icons/down.png"
                    alt="arrow"
                />
            </Link>

            <ul className={`sidebar__options ${isActive && 'sidebar__options--active'}`}>
                {
                    options.map((option: string) => {
                        return (
                            <li key={option}>
                                <Link
                                    to={`topic/${option}`}
                                    className="sidebar__option"
                                    onClick={() => {
                                        toggle();
                                        action();
                                    }}
                                >
                                    {option}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default LinkWithOptions;
