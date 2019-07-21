import { combineReducers } from 'redux';
import * as T from '../types';
import { getLocalStorageList } from '../helpers/ls';
import { ProgressIds } from '../types';

interface BaseAction {
  type: T.ActionTypes;
}

interface IEntityAction extends BaseAction {
  payload: {
    resource: T.Resource;
    list?: Array<T.ICar> | Array<T.IManufacturer> | Array<string>;
    data?: T.ICar;
  }
}

interface IMetaAction extends BaseAction {
  payload: {
    meta: Record<string, string | number>;
    list?: Array<T.ICar> | Array<T.IManufacturer> | Array<string>;
    data?: T.ICar;
  }
}

interface ILocalStorageAction extends BaseAction {
  payload: {
    key: string;
    value: Array<number>;
  }
}

interface IProgressAction extends BaseAction {
  payload: {
    id: ProgressIds;
  }
}

type Reducer<T, A> = (state: T, action: A) => T;
type EntityReducer = Reducer<T.IReduxStateEntity, IEntityAction>;
type MetaReducer = Reducer<T.IReduxStateMeta, IMetaAction>;
type LocalStorageReducer = Reducer<T.IReduxStateLocalStorage, ILocalStorageAction>;
type ProgressReducer = Reducer<T.ReduxStateProgress, IProgressAction>;

const defaultEntityState: T.IReduxStateEntity = {
  [T.Resource.cars]: [],
  [T.Resource.manufacturers]: [],
  [T.Resource.colors]: [],
};
const entity: EntityReducer = (state = defaultEntityState, action) => {
  const { type, payload } = action;

  switch (type) {
    case T.ActionTypes.LOAD_ENTITY_LIST_SUCCESS:
      return {
        ...state,
        [payload.resource]: payload.list
      };
    case T.ActionTypes.LOAD_ENTITY_SUCCESS:
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
    case T.ActionTypes.LOAD_ENTITY_LIST_SUCCESS:
      const { meta } = payload;

      return {
        ...state,
        ...meta,
      };
    default:
      return state
  }
};

const defaultLocalStorageState: T.IReduxStateLocalStorage = {
  [T.LocalStorageKeys.favoriteCars]: getLocalStorageList(T.LocalStorageKeys.favoriteCars),
};
const localStorage: LocalStorageReducer = (state = defaultLocalStorageState, action) => {
  const { type, payload } = action;

  switch (type) {
    case T.ActionTypes.UPDATE_LOCAL_STORAGE:
      const { key, value } = payload;

      return {
        ...state,
        [key]: value,
      };
    default:
      return state
  }
};

const progress: ProgressReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case T.ActionTypes.LOADING_START:
      return {
        ...state,
        [payload.id]: true,
      };
    case T.ActionTypes.LOADING_STOP:
      const newState = { ...state };
      delete newState[payload.id];

      return newState;
    default:
      return state
  }
};

export default combineReducers({ entity, meta, localStorage, progress });

