import { Link } from "react-router-dom";
import { INewsCard } from "../../../interfacesAndTypes";
import "./NewsCard.scss";


const NewsCard = ({ large, horizontal, vertical, cardData }: INewsCard) => {

    const {
        title,
        media,
        topic,
        excerpt,
        published_date
    } = cardData;

    const currentClass = large ? 'large' : horizontal ? 'horizontal' : vertical ? 'vertical' : '';

    return (
        <div className={`news-card ${currentClass}`}>
            <Link to={`/news/${title}`} className={`news-card__link-container news-card__link-container--${currentClass}`}>
                <div className={`news-card__image-container news-card__image-container--${currentClass}`} >
                    <div className="bg"></div>
                    <img className="news-card__image" src={media} alt="" />
                </div>
                <div className={`news-card__data news-card__data--${currentClass}`}>
                    <span className={`news-card__topic news-card__topic--${currentClass}`}>{topic}</span>
                    <div className={`news-card__text news-card__text--${currentClass}`}>
                        <h3 className={`news-card__title news-card__title--${currentClass}`}>{title}</h3>
                        {
                            large &&
                            <p className={`news-card__brief-info news-card__brief-info--${currentClass}`}>{excerpt}</p >
                        }
                        <div className={`news-card__navigate news-card__navigate--${currentClass}`}>
                            <span className={`news-card__link news-card__link--${currentClass}`}> Read more</span >
                            <img className={`news-card__link-icon news-card__link-icon--${currentClass}`} src="/images/icons/arrow.png" alt="arrow" />
                        </div >
                    </div >
                    <span className={`news-card__date news-card__date--${currentClass}`}>{published_date}</span >
                </div >
            </Link>
        </div >
    );
};

export default NewsCard;