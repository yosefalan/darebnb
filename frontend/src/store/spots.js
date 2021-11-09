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

const getTrack = (spot) => {
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


export const fetchUserSpots = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/spots`)
  if (res.ok) {
    const spots = await res.json();
    dispatch(getUserSpots(spots, id));
  } else {
    throw res;
  }
}

export const fetchTrack = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${+id}`)
  if (res.ok) {
    const track = await res.json();
    console.log("XXXXXXXXXXXXXXXXXX", track)
    dispatch(getTrack(track));
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
  console.log("***********", data)
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

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS: {
      const allspots = {};
      action.spots.forEach(track => {
        return allspots[track.id] = track;
      });
      return allspots;
    }
    case GET_USER_SPOTS: {
      const allspots = {};
      action.spots.forEach(track => {
        return allspots[track.id] = track;
      });
      return allspots;
    }
    case GET_SPOT: {
      const track = {}
      return { ...state, track: action.track }
    }
    case ADD_SPOT:
      return { ...state, [action.track.id]:action.track};

      default:
      return state;
    }
  }











  export default musicReducer
