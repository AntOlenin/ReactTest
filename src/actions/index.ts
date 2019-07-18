import axios from 'axios';
import qs from 'qs';
import { Dispatch } from 'redux';
import { ActionTypes, FilterParams, LocalStorageKeys, Resource } from '../types';
import { addToList, removeFromList } from '../helpers/ls';

const API_PREFIX = '/api';

type LoadEntityList = (args: { resource: Resource; filter?: FilterParams; }) => (dispatch: Dispatch) => Promise<void>;
type LoadEntity = (args: { resource: Resource; id: string | number; }) => (dispatch: Dispatch) => Promise<void>;
type AddCarToLocalStorage = (args: { id: string | number; }) => void;
type RemoveCarFromFavorite = (args: { id: string | number; }) => void;

const metaKeysMap: Record<Resource, Array<string>> = {
  [Resource.colors]: [],
  [Resource.manufacturers]: [],
  [Resource.cars]: ['totalPageCount', 'totalCarsCount'],
};

const loadEntityList: LoadEntityList = ({ resource, filter = {} }) => async (dispatch) => {
  const querystring = qs.stringify(filter);
  const url = `${API_PREFIX}/${resource}/?${querystring}`;
  const response = await axios({ url });

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
  const response = await axios({ url });
  const data = response.data[resourceSingularDataMap[resource]];

  dispatch({ type: ActionTypes.LOAD_ENTITY_SUCCESS, payload: { resource, data } })
};

const addCarToFavorite: AddCarToLocalStorage = ({ id }) => {
  const value = addToList({ listName: LocalStorageKeys.favoriteCars, value: id });
  return { type: ActionTypes.UPDATE_LOCAL_STORAGE, payload: { key: LocalStorageKeys.favoriteCars, value } }
};

const removeCarFromFavorite: RemoveCarFromFavorite = ({ id }) => {
  const value = removeFromList({ listName: LocalStorageKeys.favoriteCars, value: id });
  return { type: ActionTypes.UPDATE_LOCAL_STORAGE, payload: { key: LocalStorageKeys.favoriteCars, value } }
};

export default {
  loadEntityList,
  loadEntity,
  addCarToFavorite,
  removeCarFromFavorite,
}
