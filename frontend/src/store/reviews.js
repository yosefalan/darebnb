import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'GET_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';
const DESTROY_REVIEW = 'DESTROY_REVIEW';



const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
})

const destroyReview = (id) => ({
  type: DESTROY_REVIEW,
  id
})

export const fetchReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}/reviews`)
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getReviews(reviews));
  } else {
    throw res;
  }
}

export const addNewReview = (data, spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  if(res.ok) {
    const review = await res.json();
    dispatch(addReview(review))
    return review
}

}
export const editReview = (data, spotId, id) => async dispatch => {
  console.log("EDIT REVIEW IN STORE:", data, spotId, id)
  const response = await csrfFetch(`/api/spots/${spotId}/reviews/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  if(response.ok) {
    const review = await response.json();
    console.log("RESPONSE OK!!!", review)
    dispatch(updateReview(review))
    return review
  }
}

export const deleteReview = (spotId, id) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    dispatch(destroyReview(id));
  }
};

const initialState = {}

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS: {

      return action.reviews.reduce((reviews, review) => {
        reviews[review.id] = review
        return reviews
      },{})
      }
    case ADD_REVIEW:
      return action.review
    default:
        return state;
      }
    }











  export default reviewsReducer
