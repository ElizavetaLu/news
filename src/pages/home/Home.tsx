import LatestHeadingsSection from "./sections/latest-headings-section/LatestHeadingsSection";
import NewsSection from "./sections/news-section/NewsSection";
import Container from "../../components/container/Container";
import Search from "./sections/search/Search"; 
import { test } from "../../test";
import "./Home.scss"; 


const Home = () => {
    return (
        <main className="home">
            <Search />
            <Container> 
                <LatestHeadingsSection />
                <NewsSection title="business" data={test} />
                <NewsSection title="entertainment" data={test} />
                <NewsSection title="general" data={test} />
                <NewsSection title="health" data={test} />
                <NewsSection title="science" data={test} />
                <NewsSection title="sources" data={test} />
            </Container>
        </main>
    );
};

export default Home;