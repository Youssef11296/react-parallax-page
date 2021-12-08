import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  posts: [],
  isActiveNav: false,
  isActiveForm: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {...state, posts: state.posts.concat (action.payload)};
    case 'TOGGLE_NAV':
      return {...state, isActiveNav: !state.isActiveNav};
    case 'TOGGLE_FORM':
      return {
        ...state,
        isActiveNav: false,
        isActiveForm: action.payload,
      };
    default:
      return {...state};
  }
};
