import * as types from '../constants/actionTypes';

const initialState = {
  name: "",
  stars: 0
};

export default function filterReducer(state = initialState, action) {

  if (action.type === types.SET_FILTER) {
    return Object.assign({}, state, action.filters);
  }

  return state;

}