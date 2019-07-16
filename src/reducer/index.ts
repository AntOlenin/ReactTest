import { ActionTypes, ReduxState } from '../types';
import { combineReducers } from 'redux';

// todo entity
// @ts-ignore
const cars = (state: ReduxState = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CARS_SUCCESS:
      return action.payload;
    default:
      return state
  }
};

// @ts-ignore
const manufacturers = (state: ReduxState = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MANUFACTURERS_SUCCESS:
      return action.payload;
    default:
      return state
  }
};

// @ts-ignore
const colors = (state: ReduxState = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_COLORS_SUCCESS:
      return action.payload;
    default:
      return state
  }
};

export default combineReducers({ cars, manufacturers, colors });

