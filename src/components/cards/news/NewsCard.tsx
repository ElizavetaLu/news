import { Link } from "react-router-dom";
import { INewsCard } from "../../../interfacesAndTypes";
import "./NewsCard.scss";


const NewsCard = ({ large, horizontal, vertical, cardData }: INewsCard) => { 

    if (!cardData) return <></>

    const {
        author, 
        description,
        publishedAt,
        title,
        urlToImage 
    } = cardData;
    
    const currentClass = large ? 'large' : horizontal ? 'horizontal' : vertical ? 'vertical' : '';

    return (
        <div className={`news-card news-card--${currentClass}`}>
            <Link to={`/news/${title}`} className={`news-card__link-container news-card__link-container--${currentClass}`} state={cardData}>

                <div
                    className={`news-card__image news-card__image--${currentClass}`}
                    style={{ backgroundImage: `url(${urlToImage ? urlToImage : '/images/dummy.png'})` }}
                ></div>

                <div className={`news-card__data news-card__data--${currentClass}`}>
                    <span className={`news-card__author news-card__author--${currentClass}`}>{author}</span>
                    <div className={`news-card__text news-card__text--${currentClass}`}>
                        <h3 className={`news-card__title news-card__title--${currentClass}`}>{title}</h3>
                        {
                            large &&
                            <p className={`news-card__brief-info news-card__brief-info--${currentClass}`}>{description}</p >
                        }
                        <div className={`news-card__navigate news-card__navigate--${currentClass}`}>
                            <span className={`news-card__link news-card__link--${currentClass}`}> Read more</span >
                            <img className={`news-card__link-icon news-card__link-icon--${currentClass}`} src="/images/icons/arrow.png" alt="arrow" />
                        </div >
                    </div >
                    <span className={`news-card__date news-card__date--${currentClass}`}>{publishedAt}</span >
                </div >
            </Link>
        </div >
    );
};

export default NewsCard;