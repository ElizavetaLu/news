import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import { test } from "../../test";
import "./SelectedTopic.scss";


const SelectedTopic = () => { 

    return (
        <Container>
            <main className="selected-topic"> 

                <div className="selected-topic__data">
                    <NewsCard key={test[0]._id} large cardData={test[0]} />

                    <div className="selected-topic__data-list">
                        {
                            test.map((item, i) => {
                                if (i === 0) return null;

                                return <NewsCard key={item._id} vertical cardData={item} />
                            })
                        }
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default SelectedTopic;