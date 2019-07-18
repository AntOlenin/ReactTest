export enum Resource {
  cars = 'cars',
  colors = 'colors',
  manufacturers = 'manufacturers',
}

export interface IReduxStateEntity {
  [Resource.cars]: Array<ICar>;
  [Resource.manufacturers]: Array<IManufacturer>;
  [Resource.colors]: Array<string>;
}

export interface IReduxStateMeta {
  totalPageCount?: number;
}

export interface IReduxState {
  entity: IReduxStateEntity,
  meta: IReduxStateMeta,
}

export enum ActionTypes {
  LOAD_ENTITY_LIST_SUCCESS,
  LOAD_ENTITY_SUCCESS,
}

export interface ICar {
  color: string;
  fuelType: string;
  manufacturerName: string;
  mileage: {
    number: number;
    unit: string;
  }
  modelName: string;
  pictureUrl: string;
  stockNumber: number;
}

export interface IManufacturer {
  models: Array<{ uuid: string; name: string; }>;
  name: string;
  uuid: string;
}

enum FilterParams {
  page = 'page',
  sort = 'sort',
  manufacturer = 'manufacturer',
  color = 'color',
}

export type Filter = Record<FilterParams, string>;
