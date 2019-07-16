export type ICar = any;
export type IManufacturer = any;

export interface ReduxState {
  cars: Array<ICar>;
  manufacturers: Array<IManufacturer>;
  colors: Array<string>;
}

export enum ActionTypes {
  LOAD_CARS_SUCCESS,
  LOAD_COLORS_SUCCESS,
  LOAD_MANUFACTURERS_SUCCESS,
}
