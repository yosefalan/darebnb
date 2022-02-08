import { csrfFetch } from "./csrf";

const GET_SEARCH = 'GET_SEARCH';

const getSearch = (searchResults) => {
  return {
    type: GET_SEARCH,
    searchResults,
  };
};

export const fetchSearch = (query) => async (dispatch) => {
  const res = await csrfFetch(`/api/search/${query}`)
  if (res.ok) {
    const searchResults = await res.json();
    dispatch(getSearch(searchResults));
  } else {
    throw res;
  }
}

const initialState = {}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH: {
      const newState = {...action.searchResults}
      return newState
      }
      default:
        return state;
      }
  }

  export default searchReducer
