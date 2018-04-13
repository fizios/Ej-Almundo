import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import hotels from './hotels';
import filters from './filters';

const reducers = combineReducers({
  hotels,
  filters,
  router: routerReducer
});

export default reducers;
