import { ActionTypes, ReduxStateEntity, ReduxStateMeta } from '../types';
import { combineReducers } from 'redux';

const defaultState: ReduxStateEntity = {
  cars: [],
  manufacturers: [],
  colors: [],
};

const entity = (state: ReduxStateEntity = defaultState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOAD_ENTITY_LIST_SUCCESS:
      const { resource, list } = payload;

      return {
        ...state,
        [resource]: list
      };
    default:
      return state
  }
};

const meta = (state: ReduxStateMeta = {}, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOAD_ENTITY_LIST_SUCCESS:
      const { meta } = payload;

      return {
        ...state,
        ...meta,
      };
    default:
      return state
  }
};

export default combineReducers({ entity, meta });
