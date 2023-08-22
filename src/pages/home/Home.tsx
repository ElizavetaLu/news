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
                <NewsSection title="sport" data={test} />
                <NewsSection title="politic" data={test} />
                <NewsSection title="nature" data={test} />
                <NewsSection title="sience" data={test} />
                <NewsSection title="art" data={test} />
            </Container>
        </main>
    );
};

export default Home;