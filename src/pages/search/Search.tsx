import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICardData } from "../../interfacesAndTypes";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import FetchingProgress from "../../components/fetching-progress/FetchingProgress";
import SearchInput from "../../components/search-input/SearchInput";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import "./Search.scss";


const Search = () => {
    const { title } = useParams();
    const { state } = useLocation();

    const [value, setValue] = useState(state ? state : '');
    const { isFetching, isErrorOccured, totalPages } = useInfiniteScroll(title, value);
    const { data } = useSelector((state: any) => state.news);



    return (
        <Container>
            <main className="search">
                <div className="search__form-container">
                    <h1 className="search__title">Search News</h1>
                    <SearchInput
                        value={value}
                        setValue={setValue}
                        placeholder="Search on World News..."
                    />
                </div>

                <div className="search__results">
                    {
                        data.map((item: ICardData, i: number) => {
                            return (
                                <NewsCard key={i} vertical cardData={item} />
                            )
                        })
                    }

                    <FetchingProgress
                        isFetching={isFetching}
                        isErrorOccured={isErrorOccured}
                        totalPages={totalPages}
                        searchTerm={value}
                    />
                </div>
            </main>
        </Container>
    );
};

export default Search;