import { useNavigate } from "react-router-dom";
import SearchInput from "../../../../components/search-input/SearchInput";
import "./Search.scss";



const Search = () => {

    const navigate = useNavigate();

    return (
        <section className="search-section">
            <SearchInput
                placeholder="Search for Topics"
                light
                action={() => navigate('search')}
            />
        </section>
    );
};

export default Search;