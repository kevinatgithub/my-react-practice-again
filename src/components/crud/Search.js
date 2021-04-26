const Search = ({filter, setFilter}) => {

    return (
        <div className="search-form">
            <label>Search</label> <input value={filter} onChange={e => setFilter(e.target.value)} /> 
        </div>
    );
}

export default Search;