import SectionTitle from "../../../../components/section-title/SectionTitle";
import NewsCard from "../../../../components/cards/news/NewsCard";
import "./LatestHeadingsSection.scss";


const cardData = {
    author: "Posted Kathy Bottorff In",
    authors: "Posted Kathy Bottorff In",
    clean_url: "am1050.com",
    country: "US",
    excerpt: "Senator Mike Bohacek said in a recent release, 'Hoosier students will have access to more educational opportunities to help them achieve success thanks to the following measures we passed during the…",
    is_opinion: false,
    language: "en",
    link: "https://www.am1050.com/2023/08/13/senator-bohacek-investing-in-hoosier-students/",
    media: "https://www.am1050.com/wp-content/uploads/2023/01/Senator-Mike-Bohacek-1-8-23.jpg",
    published_date: "2023-08-14 05:09:00",
    published_date_precision: "timezone unknown",
    rank: 600650,
    rights: "am1050.com",
    summary: "Senator Mike Bohacek said in a recent release, 'Hoosier students will have access to more educational opportunities to help them achieve success thanks to the following measures we passed during the 2023 legislative session.'\n \nForty-seven percent of the state's General Fund is allocated to K-12 initiatives including eliminating textbook and technology fees, expanding eligibility for Indiana's Choice Scholarship Program, and increasing funding for school safety.   \n \nThe new legislation offers eligibility for the \nOn My Way Pre-K program\n.",
    title: "Senator Bohacek: Investing in Hoosier Students",
    topic: "news",
    twitter_account: "@WTCAam1050",
    _id: "028088b6ed1324f03eaaf62e7911f828",
    _score: null
}


const LatestHeadingsSection = () => {

    return (
        <div className="latest-headings">
            <SectionTitle title="Latest News" />
            <div className="cards">
                <NewsCard large cardData={cardData} />
                <NewsCard horizontal cardData={cardData} />
                <NewsCard horizontal cardData={cardData} />
                <NewsCard horizontal cardData={cardData} />
                <NewsCard vertical cardData={cardData} />
                <NewsCard vertical cardData={cardData} />
                <NewsCard vertical cardData={cardData} />
                <NewsCard vertical cardData={cardData} />
                <NewsCard vertical cardData={cardData} />
            </div>
        </div>
    );
};

export default LatestHeadingsSection;