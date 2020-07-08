export const SEARCH_USERS = 'SEARCH_USERS';
export const GET_USERS = 'GET_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';
export const GET_REPOS = 'GET_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
