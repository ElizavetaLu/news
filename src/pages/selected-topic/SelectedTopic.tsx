import { ICardData } from "../../interfacesAndTypes";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import DataFetchingError from "../../components/data-fetching-error/DataFetchingError";
import SearchInput from "../../components/search-input/SearchInput";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import Loader from "../../components/loader/Loader";
import { test } from "../../test";
import "./SelectedTopic.scss";


const SelectedTopic = () => {

    const [data, isFetching, isErrorOccured, totalPages] = useInfiniteScroll()


    return (
        <Container>
            <main className="selected-topic">

                <div className="selected-topic__data">
                    <NewsCard large cardData={test[0]} />

                    <div className="selected-topic__search">
                        <SearchInput placeholder="Search news"/>
                    </div>

                    <div className="selected-topic__data-list">
                        {
                            test?.map((item: ICardData, i: number) => {
                                if (i === 0) return null;
                                return <NewsCard key={i} vertical cardData={item} />
                            })
                        }
                        {
                            isFetching
                            && <div className="loader-container">
                                <Loader />
                            </div>
                        }
                        {
                            isErrorOccured
                            && <div className="error-container">
                                <DataFetchingError />
                            </div>
                        }
                        {
                            totalPages === 0 && <p>No data was found</p>
                        }
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default SelectedTopic;