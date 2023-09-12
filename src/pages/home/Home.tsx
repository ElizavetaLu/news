import LatestHeadingsSection from "./sections/latest-headings-section/LatestHeadingsSection";
import NewsSection from "./sections/news-section/NewsSection";
import Container from "../../components/container/Container";
import Search from "./sections/search/Search";
import { topics } from "../../data"; 


const Home = () => { 
    return (
        <main>
            <Search />
            <Container>
                <LatestHeadingsSection />
                {
                    topics.slice(-4).map(item => {
                        return <NewsSection key={item} title={item}  />
                    })
                }
            </Container>
        </main>
    );
};

export default Home;