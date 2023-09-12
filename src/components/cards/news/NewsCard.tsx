import { Link } from "react-router-dom";
import { INewsCard } from "../../../interfacesAndTypes";
import formatData from "../../../helpers/formatData";
import "./NewsCard.scss";


const NewsCard = ({ lastNewsElementRef, large, horizontal, vertical, cardData }: INewsCard) => {

    if (!cardData) return <></>

    const {
        category,
        creator,
        description,
        image_url,
        pubDate,
        title
    } = cardData; 
 
    const titleString = title.length > 78 ? title.slice(0, 78) + '...' : title;
    const descriptionString = description?.length > 500 ? description.slice(0, 500) + '...' : description;

    const currentClass = large ? 'large' : horizontal ? 'horizontal' : vertical ? 'vertical' : '';

    return (
        <div ref={lastNewsElementRef} className={`news-card news-card--${currentClass}`}>
            <Link to={`/news/${title}`} className={`news-card__link-container news-card__link-container--${currentClass}`} state={cardData}>

                <div
                    className={`news-card__image news-card__image--${currentClass}`}
                    style={{ backgroundImage: `url(${image_url ? image_url : '/images/dummy.png'})` }}
                ></div>

                <div className={`news-card__data news-card__data--${currentClass}`}>
                    <div className={`news-card__text news-card__text--${currentClass}`}>
                        <span className={`news-card__category news-card__category--${currentClass}`}>{category?.join(', ')}</span>
                        <span className={`news-card__author news-card__author--${currentClass}`}>{creator ? creator.join(', ') : 'Unknown author'}</span>
                        <h3 className={`news-card__title news-card__title--${currentClass}`}>{titleString}</h3>
                        {
                            large &&
                            <p className="news-card__brief-info">{descriptionString}</p >
                        }
                    </div>

                    <div>
                        <div className={`news-card__navigate news-card__navigate--${currentClass}`}>
                            <span className={`news-card__link news-card__link--${currentClass}`}> Read more</span >
                            <img className={`news-card__link-icon news-card__link-icon--${currentClass}`} src="/images/icons/arrow.png" alt="arrow" />
                        </div >
                        <span className={`news-card__date news-card__date--${currentClass}`}>{formatData(pubDate)}</span >

                    </div>
                </div >
            </Link >
        </div >
    );
};

export default NewsCard;