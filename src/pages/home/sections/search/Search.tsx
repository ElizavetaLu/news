import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux"; 
import "./Search.scss";

// const starsQuantity = 15;
// const starsArray = Array.from(Array(starsQuantity).keys());

const Search = () => {

    // const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();


    const [searchTerm, setSearchTerm] = useState<string>('');

    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();

        // dispatch(getNewsBySearchTerm(searchTerm))

        navigate('search', { state: { searchTerm } });
    }

    return (
        <section className="search-section">

            {/* {
                starsArray.map(item => <div key={item} className="star"></div>)
            } */}

            <form onSubmit={onSearch} action="" className="search-section__form">
                <input
                    className="search-section__input"
                    type="text"
                    placeholder="Search for Topics"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-section__btn">
                    <img className="search-section__btn-icon" src="/images/icons/search-light.png" alt="search-section" />
                </button>
            </form>
        </section>
    );
};

export default Search;