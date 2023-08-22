import { TSectionTitle } from "../../interfacesAndTypes";
import LinkWithIcon from "../link-with-icon/LinkWithIcon";
import "./SectionTitle.scss";


const SectionTitle = ({ title }: TSectionTitle) => {

    return (
        <div className="section-title">
            <span className="section-title__title">{title}</span>
            <LinkWithIcon linkText="View more" navigation={`/topic/${title}`} />
        </div>
    );
};

export default SectionTitle