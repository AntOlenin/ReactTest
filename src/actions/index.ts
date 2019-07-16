import axios from 'axios';
import { ActionTypes } from '../types';

// @ts-ignore
const loadCarList = () => async (dispatch, getState) => {
  const cars = await axios({ url: '/api/cars' });
  dispatch({ type: ActionTypes.LOAD_CARS_SUCCESS, payload: cars })
};

// @ts-ignore
const loadColorList = () => async (dispatch, getState) => {
  const response = await axios({ url: '/api/colors' });
  const payload = response.data.colors;
  dispatch({ type: ActionTypes.LOAD_COLORS_SUCCESS, payload })
};

// @ts-ignore
const loadManufacturerList = () => async (dispatch, getState) => {
  const response = await axios({ url: '/api/manufacturers' });
  const payload = response.data.manufacturers;
  dispatch({ type: ActionTypes.LOAD_MANUFACTURERS_SUCCESS, payload })
};

export default {
  loadManufacturerList,
  loadColorList,
  loadCarList,
}
