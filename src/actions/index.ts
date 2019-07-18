import axios from 'axios';
import qs from 'qs';
import { ActionTypes } from '../types';
import { Dispatch } from 'redux';

const API_PREFIX = '/api';

export enum Resource {
  cars = 'cars',
  colors = 'colors',
  manufacturers = 'manufacturers',
}

type Filter = Record<string, string | number>;

type LoadEntityList = (args: { resource: Resource; filter?: Filter; }) => (dispatch: Dispatch) => void;
type LoadEntity = (args: { resource: Resource; id: string | number; }) => (dispatch: Dispatch) => void;

const loadEntityList: LoadEntityList = ({ resource, filter = {} }) => async (dispatch) => {
  const querystring = qs.stringify(filter);
  const url = `${API_PREFIX}/${resource}/?${querystring}`;
  const response = await axios({ url });

  const list = response.data[resource];

  const totalPageCount = response.data['totalPageCount'];
  const meta = typeof totalPageCount === 'undefined' ? {} : { totalPageCount };

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

export default {
  loadEntityList,
  loadEntity,
}
