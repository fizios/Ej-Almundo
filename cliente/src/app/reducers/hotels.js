import * as types from '../constants/actionTypes';

const initialState = [];

export default function hotelsReducer(state = initialState, action) {

  if (action.type === types.GET_HOTELS) {
    return Object.assign([], action.data);
  }

  return state;

}