// action types
import * as actionTypes from './actionTypes';

/* action creators */

// Get posts
export const getPosts = data => {
  return {
    type: actionTypes.GET_POSTS,
    payload: data,
  };
};

// Toggle nav
export const toggleNav = () => {
  return {
    type: actionTypes.TOGGLE_NAV,
  };
};

// Toggle form
export const toggleForm = bool => {
  return {
    type: actionTypes.TOGGLE_FORM,
    payload: bool,
  };
};
