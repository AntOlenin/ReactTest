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
  totalCarsCount?: number;
}

export enum LocalStorageKeys {
  favoriteCars = 'favoriteCars'
}

export interface IReduxStateLocalStorage {
  [LocalStorageKeys.favoriteCars]: Array<number>;
}

export interface IReduxState {
  entity: IReduxStateEntity,
  meta: IReduxStateMeta,
  localStorage: IReduxStateLocalStorage,
}

export enum ActionTypes {
  LOAD_ENTITY_LIST_SUCCESS,
  LOAD_ENTITY_SUCCESS,
  UPDATE_LOCAL_STORAGE,
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

export enum FilterKeys {
  page = 'page',
  sort = 'sort',
  manufacturer = 'manufacturer',
  color = 'color',
}

export enum SortTypes {
  asc = 'asc',
  desc = 'desc',
}

export interface FilterParams {
  [FilterKeys.page]?: number | string;
  [FilterKeys.sort]?: SortTypes;
  manufacturer?: string;
  color?: string;
}
