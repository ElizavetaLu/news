import { Dispatch, SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newsBySearchTerm } from "../../store/actions/actionCreators";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import Loader from "../../components/loader/Loader";
import { test } from "../../test";
import "./Search.scss";


const Search = () => {

    const dispatch: Dispatch<any> = useDispatch();
    const { state } = useLocation();
    const [searchTerm, setSearchTerm] = useState<string>(state?.searchTerm);

    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();

        //request data 
    }

    const { isFetching, totalPages, data } = useSelector((state: any) => state.newsBySearchTerm);


    const [page, setPage] = useState<number>(1);

    const handleScroll = (e: any) => {
        if (isFetching) return;

        const { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (totalPages !== 0 && totalPages < page) return;

        const query = {
            pageNumber: page,
            searchTerm
        }

        dispatch(newsBySearchTerm(page === 1, query));

    }, [page]);



    if (totalPages === 1 && !data.length) {
        return <p> No data was found </p>;
    };

    if (isFetching && !data.length) {
        return <Loader />;
    };

    return (
        <Container>
            <main className="search">
                <div className="search__form-container">
                    <h1 className="search__title">Search News</h1>
                    <form onSubmit={onSearch} action="" className="search__form">
                        <input
                            className="search__input"
                            type="text"
                            placeholder="Search for Topics"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search__btn">
                            <img className="search__btn-icon" src="/images/icons/search.png" alt="search-section" />
                        </button>
                    </form>
                </div>

                <div className="search__results">
                    {
                        test.map(item => {
                            return (
                                <NewsCard key={item._id} large cardData={item} />
                            )
                        })
                    }
                </div>
            </main>
        </Container>
    );
};

export default Search;