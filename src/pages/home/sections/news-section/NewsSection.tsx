import NewsCard from "../../../../components/cards/news/NewsCard";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import { ICardData, INewsSection } from "../../../../interfacesAndTypes";
import "./NewsSection.scss";

// const NewsSection = ({ title, data }: INewsSection) => {
const NewsSection = ({ title, data }: any) => {

    return (
        <section className="news-section">
            <SectionTitle title={title} />

            <div className="news-section__cards">
                <NewsCard large cardData={data[0]} />

                {/* <div className="news-setion__cards-column"> */}
                    {
                        // data.map((item: ICardData, i: number) => {
                        data.map((item: any, i: number) => {
                            if (i === 0 || i > 3) return null;

                            return (
                                <NewsCard key={i} horizontal cardData={item} />
                            )
                        })
                    }
                {/* </div> */}
            </div>
        </section>
    );
};

export default NewsSection;