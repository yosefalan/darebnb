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

const getUserspots = (spots) => {
  return {
    type: GET_USER_SPOTS,
    spots,
  };
};

const getTrack = (spot) => {
  return {
    type: GET_SPOT,
    spots,
  };
};

const addTrack = spot => ({
  type: ADD_SPOT,
  spot
})

export const fetchspots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots')
  if (res.ok) {
    const spots = await res.json();
    dispatch(getspots(spots));
  } else {
    throw res;
  }
}


export const fetchUserspots = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/spots`)
  if (res.ok) {
    const spots = await res.json();
    dispatch(getUserspots(spots, id));
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

export const uploadTrack = (data) => async (dispatch) => {
  const {
    title,
    artist,
    album,
    art,
    url,
  } = data;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('artist', artist);
  formData.append('album', album);
  formData.append('art', art);
  formData.append('url', url);

  const res = await csrfFetch(`/api/spots/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });

  const newTrack = await res.json();
  dispatch(addTrack(newTrack));
};

const initialState = {}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_spots: {
      const allspots = {};
      action.spots.forEach(track => {
        return allspots[track.id] = track;
      });
      return allspots;
    }
    case GET_USER_spots: {
      const allspots = {};
      action.spots.forEach(track => {
        return allspots[track.id] = track;
      });
      return allspots;
    }
    case GET_TRACK: {
      const track = {}
      return { ...state, track: action.track }
    }
    case ADD_TRACK:
      return { ...state, [action.track.id]:action.track};

      default:
      return state;
    }
  }











  export default musicReducer
