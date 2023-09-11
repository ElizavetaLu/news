import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ICardData } from "../../interfacesAndTypes";
import DataFetchingError from "../../components/data-fetching-error/DataFetchingError";
import SearchInput from "../../components/search-input/SearchInput";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import Loader from "../../components/loader/Loader";
import "./SelectedTopic.scss";



const SelectedTopic = () => {

    const { title } = useParams();
    const [value, setValue] = useState('');

    const { isFetching, isErrorOccured, totalPages } = useInfiniteScroll(title, value);

    const { searchTerm, data } = useSelector((state: any) => state.news);


    return (
        <Container>
            <main className="selected-topic">

                <div className="selected-topic__data">

                    <div className="selected-topic__search">
                        <SearchInput
                            value={value}
                            setValue={setValue}
                            placeholder="Search by title"
                        />
                    </div>

                    <div className="selected-topic__data-list">
                        {
                            data?.map((item: ICardData) => {
                                return <NewsCard key={item.article_id} vertical cardData={item} />
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
                            (totalPages === 0 && !searchTerm) && <p>No data was found</p>
                        }
                        {
                            (totalPages === 0 && searchTerm) && <p>No data was found with such search term in current category</p>
                        }
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default SelectedTopic; 