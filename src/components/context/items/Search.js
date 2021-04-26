import { useContext } from "react";
import { FilterContext } from "../../../AppContext";
import styled from 'styled-components';

const SearchBox = styled.div`
    background: #aabbcc;
    padding: 1em;
`;

const SearchInput = styled.input`
    margin-left:1em;
`;

const Search = () => {
    const {filter, setFilter} = useContext(FilterContext);
    return (
        <SearchBox>
            <label htmlFor="">Search</label><SearchInput type="text" value={filter} onChange={e => setFilter(e.target.value)} />
        </SearchBox>
    );
}

export default Search;