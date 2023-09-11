import { Dispatch, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ISearchInterface } from "../../interfacesAndTypes";
import { news, setSearchTerm } from "../../store/actions/actionCreators";
import "./SearchInput.scss";


const SearchInput = ({ value, setValue, placeholder, light, action }: ISearchInterface) => {

    const { title } = useParams();
    const dispatch: Dispatch<any> = useDispatch();


    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!value.trim()) return;


        dispatch(setSearchTerm(value));

        dispatch(news(true, {
            category: title,
            page: null,
            searchTerm: value
        }))

        if (action) { action() }
    }


    return (
        <form onSubmit={onSearch} action="" className="search-news">
            <input
                className={`search-news__input ${light && 'search-news__input--light'}`}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
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