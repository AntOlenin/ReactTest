export interface ReduxStateEntity {
  cars: Array<ICar>;
  manufacturers: Array<IManufacturer>;
  colors: Array<string>;
}

export interface ReduxState {
  entity: ReduxStateEntity,
}

export enum ActionTypes {
  LOAD_ENTITY_LIST_SUCCESS,
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
