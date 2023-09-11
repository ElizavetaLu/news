import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICardData } from "../../interfacesAndTypes";
import DataFetchingError from "../../components/data-fetching-error/DataFetchingError";
import SearchInput from "../../components/search-input/SearchInput";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import Loader from "../../components/loader/Loader";
import "./Search.scss";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";


const Search = () => {
    const { title } = useParams();
    const { state } = useLocation()

    const [value, setValue] = useState(state ? state : '');
    const { isFetching, isErrorOccured, totalPages } = useInfiniteScroll(title, value)
    const { data } = useSelector((state: any) => state.news);



    return (
        <Container>
            <main className="search">
                <div className="search__form-container">
                    <h1 className="search__title">Search News</h1>
                    <SearchInput
                        value={value}
                        setValue={setValue}
                        placeholder="Search on World News..." />
                </div>

                <div className="search__results">
                    {
                        data.map((item: ICardData) => {
                            return (
                                <NewsCard key={item.article_id} large cardData={item} />
                            )
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
                        (totalPages === 0) && <p>No data was found</p>
                    }
                </div>
            </main>
        </Container>
    );
};

export default Search;