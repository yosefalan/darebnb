import { csrfFetch } from "./csrf";

const GET_USERS = 'GET_USER';



const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};


export const fetchUsers = () => async (dispatch) => {
  const res = await csrfFetch('/api/users')
  if (res.ok) {
    const users = await res.json();
    dispatch(getUsers(users));
  } else {
    throw res;
  }
}

const initialState = {}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return action.users.reduce((users, user) => {
        users[user.id] = user
        return users
      },{})
    }
    default:
        return state;
  }
}











  export default usersReducer
