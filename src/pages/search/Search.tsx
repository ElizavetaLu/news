 import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard"; 
import SearchInput from "../../components/search-input/SearchInput";
import { test } from "../../test";
import "./Search.scss";


const Search = () => { 

    return (
        <Container>
            <main className="search">
                <div className="search__form-container">
                    <h1 className="search__title">Search News</h1>
                    <SearchInput placeholder="Search news"/>
                </div>

                <div className="search__results">
                    {
                        test.map((item, i) => {
                            return (
                                <NewsCard key={i} large cardData={item} />
                            )
                        })
                    }
                </div>
            </main>
        </Container>
    );
};

export default Search;