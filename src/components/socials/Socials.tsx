import { socials } from "../../data";
import { TLight } from "../../interfacesAndTypes";
import "./Socials.scss";

const Socials = ({ light }: TLight) => {

    return (
        <div className="socials">
            {
                socials.map(item => {
                    return (
                        <button key={item.id} className="socials__social">
                            <img
                                className={`socials__social-icon socials__social-icon--${item.name} ${light && 'socials__social-icon--light'}`}
                                src={`/images/socials/${item.icon}`}
                                alt={item.name}
                            />
                        </button>
                    )
                })
            }
        </div>
    );
};

export default Socials;