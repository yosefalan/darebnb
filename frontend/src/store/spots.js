import { csrfFetch } from "./csrf";

const GET_SPOTS = 'GET_SPOTS';
const GET_USER_SPOTS = 'GET_USER_SPOTS';
const GET_SPOT = 'GET_SPOT';
const ADD_SPOT = 'ADD_SPOT';

const getSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots,
  };
};

const getUserSpots = (spots) => {
  return {
    type: GET_USER_SPOTS,
    spots,
  };
};

const getSpot = (spot) => {
  return {
    type: GET_SPOT,
    spot,
  };
};

const addSpot = spot => ({
  type: ADD_SPOT,
  spot
})

export const fetchSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots')
  if (res.ok) {
    const spots = await res.json();
    dispatch(getSpots(spots));
  } else {
    throw res;
  }
}

// export const fetchUserSpots = (id) => async (dispatch) => {
//   const res = await csrfFetch(`/api/users/${id}/spots`)
//   if (res.ok) {
//     const spots = await res.json();
//     dispatch(getUserSpots(spots, id));
//   } else {
//     throw res;
//   }
// }

export const fetchSpot = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${+id}`)
  if (res.ok) {
    const spot = await res.json();
    dispatch(getSpot(spot));
  } else {
    throw res;
  }
}

export const addNewSpot = (data) => async (dispatch) => {
  const {
    images,
    userId,
    name,
    address,
    city,
    state,
    country,
    lat,
    lng,
    price
  } = data;
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('name', name);
  formData.append('address', address);
  formData.append('city', city);
  formData.append('country', country);
  formData.append('state', state);
  formData.append('lat', lat);
  formData.append('lng', lng);
  formData.append('price', price);

  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  const res = await csrfFetch(`/api/spots/add`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });

  const newSpot = await res.json();
  dispatch(addNewSpot(newSpot));
};

const initialState = {}

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS: {
      return action.spots.reduce((spots, spot) => {
        spots[spot.id] = spot
        return spots
      },{})
      }
      case GET_SPOT: {
        const spot = action.spot
        return { ...state, spot}
      }
    case ADD_SPOT:
      return { ...state, [action.spot.id]:action.spot};

      default:
        return state;
      }
    }











  export default spotsReducer
