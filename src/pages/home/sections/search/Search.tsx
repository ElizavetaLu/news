import { useState } from "react";
import "./Search.scss";

const starsQuantity = 15;
const starsArray = Array.from(Array(starsQuantity).keys());

console.log(starsArray)
const Search = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <section className="search">

            {
                starsArray.map(item => <div key={item} className="star"></div>)
            }

            <form action="" className="search__form">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Search for Topics"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="search__btn">
                    <img className="search__btn-icon" src="/images/icons/search-light.png" alt="search" />
                </button>
            </form>
        </section>
    );
};

export default Search;