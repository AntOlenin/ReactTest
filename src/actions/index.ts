import axios from 'axios';
import qs from 'qs';
import { Dispatch } from 'redux';
import { ActionTypes, FilterParams, LocalStorageKeys, Resource, ProgressIds } from '../types';
import { addToLocalStorageList, removeFromLocalStorageList } from '../helpers/ls';

const API_PREFIX = '/api';

type LoadEntityList = (args: { resource: Resource; filter?: FilterParams; }) => (dispatch: Dispatch) => Promise<void>;
type LoadEntity = (args: { resource: Resource; id: string | number; }) => (dispatch: Dispatch) => Promise<void>;
type AddCarToLocalStorage = (args: { id: string | number; }) => void;
type RemoveCarFromFavorite = (args: { id: string | number; }) => void;
type ClearError = () => void;

const metaKeysMap: Record<Resource, Array<string>> = {
  [Resource.colors]: [],
  [Resource.manufacturers]: [],
  [Resource.cars]: ['totalPageCount', 'totalCarsCount'],
};

const entityListProgressMap: Record<Resource, ProgressIds> = {
  [Resource.cars]: ProgressIds.carsList,
  [Resource.manufacturers]: ProgressIds.manufacturersList,
  [Resource.colors]: ProgressIds.colorsList,
};

const loadEntityList: LoadEntityList = ({ resource, filter = {} }) => async (dispatch) => {
  const querystring = qs.stringify(filter);
  const url = `${API_PREFIX}/${resource}/?${querystring}`;

  dispatch({ type: ActionTypes.LOADING_START, payload: { id: entityListProgressMap[resource] } });
  const response = await axios({ url });
  dispatch({ type: ActionTypes.LOADING_STOP, payload: { id: entityListProgressMap[resource] } });

  const list = response.data[resource];
  const metaKeys = metaKeysMap[resource];

  const meta = metaKeys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: response.data[key],
    };
  }, {});

  dispatch({ type: ActionTypes.LOAD_ENTITY_LIST_SUCCESS, payload: { resource, list, meta } })
};

const resourceSingularDataMap = {
  [Resource.cars]: 'car',
  [Resource.colors]: 'color',
  [Resource.manufacturers]: 'manufacturer',
};

const loadEntity: LoadEntity = ({ resource, id }) => async (dispatch) => {
  const url = `${API_PREFIX}/${resource}/${id}`;

  try {
    const response = await axios({ url });
    const data = response.data[resourceSingularDataMap[resource]];

    dispatch({ type: ActionTypes.LOAD_ENTITY_SUCCESS, payload: { resource, data } })
  } catch (err) {
    dispatch({ type: ActionTypes.LOAD_ENTITY_ERROR })
  }
};

const addCarToFavorite: AddCarToLocalStorage = ({ id }) => {
  const value = addToLocalStorageList({ listName: LocalStorageKeys.favoriteCars, value: id });
  return { type: ActionTypes.UPDATE_LOCAL_STORAGE, payload: { key: LocalStorageKeys.favoriteCars, value } }
};

const removeCarFromFavorite: RemoveCarFromFavorite = ({ id }) => {
  const value = removeFromLocalStorageList({ listName: LocalStorageKeys.favoriteCars, value: id });
  return { type: ActionTypes.UPDATE_LOCAL_STORAGE, payload: { key: LocalStorageKeys.favoriteCars, value } }
};

export default {
  loadEntityList,
  loadEntity,
  addCarToFavorite,
  removeCarFromFavorite,
}
