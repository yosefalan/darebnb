import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { fetchSearch } from "../../store/search"

function Search(){

  const [searchFilter, setSearchFilter ] = useState("")
  const [query, setQuery ] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const newSearch = dispatch(fetchSearch(query))
    history.push('/results')
  }

  // console.log("QQQQQQQQQQQQQQQQQ", query )

  return (
    <div className="search">
        <form
        onSubmit={handleSearch}
        >
          <input
          type="search"
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default Search;
