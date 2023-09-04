import { SyntheticEvent, useState } from "react";
import { ISearchInterface } from "../../interfacesAndTypes";
import "./SearchInput.scss";

const SearchInput = ({ placeholder, light, action }: ISearchInterface) => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();
        if (action) { action() }

        //request data  
    }


    return (
        <form onSubmit={onSearch} action="" className="search-news">
            <input
                className={`search-news__input ${light && 'search-news__input--light'}`}
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-news__btn">
                <img
                    className="search-news__btn-icon"
                    src={`/images/icons/${light ? 'search-light' : 'search'}.png`}
                    alt="search-section"
                />
            </button>
        </form>
    );
};

export default SearchInput;