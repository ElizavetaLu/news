import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import Socials from "../../components/socials/Socials";
import formatData from "../../helpers/formatData";
import "./SelectedNews.scss";


const SelectedNews = () => {

    const { state } = useLocation();
    const navigate = useNavigate()
    if (!state) navigate('*');

    const {
        category,
        content,
        country,
        creator,
        description,
        image_url,
        link,
        pubDate,
        title,
    } = state;

    const splitedContent = () => {
        let formattedText = '';
        let dotsCount = 0; 
        
        for (let i = 0; i < content?.length; i++) {
            if (dotsCount < 3) { 
                formattedText += content[i]
 
                if (content[i - 1] + content[i] === '. ') {
                    dotsCount++
                }
            } else { 
                formattedText += `\n\t ${content[i]}`
                dotsCount = 0;
            }
        }

        return formattedText
    } 

    return (
        <Container>
            <div className="news">
                <div className="news__title-row">
                    <h2 className="news__title">{title}</h2>
                </div>

                <div className="news__info">
                    {<div className="news__info-row">
                        <span className="news__info-title">Author: </span>
                        <span className="news__info-text">{creator ? creator.join(', ') : 'Unknown author'} </span>
                        <span className="news__info-text news__info-text--country">({country})</span>
                    </div>}
                    <div className="news__info-row">
                        <span className="news__info-title">Published: </span>
                        <span className="news__info-text">{formatData(pubDate)}</span>
                    </div>
                </div>

                <Socials />

                <img className="news__image" src={`${image_url ? image_url : "/images/dummy.png"}`} alt="" />
                <div className="news__description">{description}</div> 
                <div className="news__summary">{splitedContent()}</div>
                <div className="news__category">{category && category.join(', ')}</div>
                <div className="news__link">Origin link: <Link to={link} className="news__link-url">{link}</Link></div>
            </div>
        </Container>
    );
};

export default SelectedNews;