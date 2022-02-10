import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { fetchSearch } from "../../store/search"
import './AltNavigation.css';

function Search({ queryString }){

  const [searchFilter, setSearchFilter ] = useState("")
  const [query, setQuery ] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();
  queryString = query;
  const handleSearch = (e) => {
    e.preventDefault();
    const newSearch = dispatch(fetchSearch(query))
    history.push(`/results/${query}`)
  }

  // console.log("QQQQQQQQQQQQQQQQQ", query )

  return (
    <div className="search">
        <form
        className="searchForm"
        onSubmit={handleSearch}
        >
          <input
          className="searchBar"
          type="search"
          // placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
          />
          <img src="/images/search.png"
          className="searchIcon"></img>
        </form>
    </div>
  );
}

export default Search;
