import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { fetchSearch } from "../../store/search"
import AltNavigation from "../AltNavigation/AltNavigation"
import { fetchSpots } from "../../store/spots"

function SearchResults(){

  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter ] = useState("")
  const [query, setQuery ] = useState("");
  const results = useSelector(state => Object.values(state?.search));
  const spots = useSelector(state => Object.values(state?.spots));

  let count = 0
  if (results[0]?.length) count += results[0]?.length
  if (results[1]?.length) count += results[1]?.length

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);



  console.log("RRRRRRRRRRR", results)
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("DDDDDDDDDDDDDDDD")
    const newSearch = dispatch(fetchSearch(query))
  }

  // console.log("QQQQQQQQQQQQQQQQQ", query )


  return (
    <div className="search_results">
      <AltNavigation />
      <div>
        <h1>Search Results ({count})</h1>
        {results[0]?.length ?
          results[0]?.map(result => (
            <NavLink to={`/spots/${result.spotId}`}>
              <div className="result_tile">
                <p><i>Result from Spots:</i></p>
                <h2>{result.name}</h2>
                <span>{result.city}, {result.country}</span>
                <p>{result.description}</p>
              </div>
            </NavLink>
          ))
      : null}
        {results[1]?.length ?
          results[1]?.map(result => (
            <NavLink to={`/spots/${result.spotId}`}>
              <div className="result_tile">
                <p><i>Result from Reviews:</i></p>
                <p>{result.review}</p>
              </div>
            </NavLink>
          ))
      : null}
      </div>

    </div>
  );
}

export default SearchResults;
