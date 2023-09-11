import { useNavigate } from "react-router-dom";
import SearchInput from "../../../../components/search-input/SearchInput";
import "./Search.scss";
import { useState } from "react";



const Search = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('');

    return (
        <section className="search-section">
            <SearchInput
                value={value}
                setValue={setValue}
                placeholder="Search for Topics"
                action={() => navigate('search', { state:value })}
                light
            />
        </section>
    );
};

export default Search;