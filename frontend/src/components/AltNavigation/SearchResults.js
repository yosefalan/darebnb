import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import { fetchSearch } from "../../store/search"
import AltNavigation from "../AltNavigation/AltNavigation"
import { fetchSpots } from "../../store/spots"
import './AltNavigation.css';

function SearchResults(){
  const  { query } = useParams();

  console.log("QQQQQQQQQQQQQQQQQQQ", query)
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter ] = useState("")
  // const [query, setQuery ] = useState("");
  const results = useSelector(state => Object.values(state?.search));
  const spots = useSelector(state => Object.values(state?.spots));

  let count = 0
  if (results[0]?.length) count += results[0]?.length
  if (results[1]?.length) count += results[1]?.length

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);


  return (
    <div className="search_results">
      <AltNavigation />
      <div className="results_container">
        <div className="results_container_center">
          <h1>Search Results ({count})</h1>
          {count === 0 ?
          <h2>No results found for "{query}"</h2>
          :
          <h2>Showing results for "{query}"</h2>
          }
          {results[0]?.length ?
            results[0]?.map(result => (
              <NavLink to={`/spots/${result.id}`}>
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

    </div>
  );
}

export default SearchResults;
