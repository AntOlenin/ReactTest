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
      return {
        ...state,
        [payload.resource]: payload.list
      };
    case ActionTypes.LOAD_ENTITY_SUCCESS:
      return {
        ...state,
        [payload.resource]: [
          payload.data,
        ]
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

