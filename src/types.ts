export type ICar = any;
export type IManufacturer = any;

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
