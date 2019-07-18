import { ActionTypes, IReduxStateEntity, IReduxStateMeta } from '../types';
import { combineReducers } from 'redux';

const defaultState: IReduxStateEntity = {
  cars: [],
  manufacturers: [],
  colors: [],
};

const entity = (state: IReduxStateEntity = defaultState, action: any) => {
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

const meta = (state: IReduxStateMeta = {}, action: any) => {
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

