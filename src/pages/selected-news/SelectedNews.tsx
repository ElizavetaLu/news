import { useLocation } from "react-router-dom";
import Container from "../../components/container/Container";
import Socials from "../../components/socials/Socials";
import "./SelectedNews.scss";


const SelectedNews = () => {

    const { state } = useLocation();
    if (!state) return <p>Some undef error</p>;

    const {
        author,
        country,
        link,
        media,
        published_date,
        summary,
        title,
        topic
    } = state;

    return (
        <Container>
            <div className="news">
                <div className="news__title-row">
                    <h2 className="news__title">{title}</h2>
                    <span className="news__topic">{topic}</span>
                </div>

                <div className="news__info">
                    <div className="news__info-row">
                        <span className="news__info-title">Author: </span>
                        <span className="news__info-text">{author}, {country}</span>
                    </div>
                    <div className="news__info-row">
                        <span className="news__info-title">Published: </span>
                        <span className="news__info-text">{published_date}</span>
                    </div>
                </div>

                <Socials />

                <div className="news__image" style={{ backgroundImage: `url(${media})` }}> </div>
                <p className="news__summary">{summary}</p>
            </div>
        </Container>
    );
};

export default SelectedNews;