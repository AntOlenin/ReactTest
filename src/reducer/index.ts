import { ActionTypes, ICar, IManufacturer, IReduxStateEntity, IReduxStateMeta, Resource } from '../types';
import { combineReducers } from 'redux';

const defaultState: IReduxStateEntity = {
  [Resource.cars]: [],
  [Resource.manufacturers]: [],
  [Resource.colors]: [],
};

interface BaseAction {
  type: ActionTypes;
}

interface IEntityAction extends BaseAction {
  payload: {
    resource: Resource;
    list?: Array<ICar> | Array<IManufacturer> | Array<string>;
    data?: ICar;
  }
}

interface IMetaAction extends BaseAction {
  payload: {
    meta: Record<string, string | number>;
    list?: Array<ICar> | Array<IManufacturer> | Array<string>;
    data?: ICar;
  }
}

type Reducer<T, A> = (state: T, action: A) => T;
type EntityReducer = Reducer<IReduxStateEntity, IEntityAction>;
type MetaReducer = Reducer<IReduxStateMeta, IMetaAction>;

const entity: EntityReducer = (state = defaultState, action) => {
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

const meta: MetaReducer = (state = {}, action) => {
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

