import * as types from '../constants/actionTypes';
import ApiClient from '../api';

export function getHotels(filter = {}) {
  return (dispatch, getState) => {
    //llamada a la api para hoteles

    const filters = Object.assign({}, getState().filters, filter);

    // debugger;

    dispatch({
      type: types.SET_FILTER,
      filters
    });

    ApiClient.searchHotels(filters)
      .then(data => {
        dispatch({
          type: types.GET_HOTELS,
          data
        })
      });
  }
}