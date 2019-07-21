import { IReduxState } from '../types';

export const reduxStateMock: IReduxState = {
  entity: {
    colors: ['red'],
    manufacturers: [{ name: 'Audi', uuid: '324dw', models: [] }],
    cars: [
      {
        color: 'blue',
        fuelType: 'Diesel',
        manufacturerName: 'Chrysler',
        mileage: { number: 37081, unit: 'km' },
        modelName: 'GTS',
        pictureUrl: '/images/car.png',
        stockNumber: 50,
      }, {
        color: 'red',
        fuelType: 'Petrol',
        manufacturerName: 'BMW',
        mileage: { number: 50104, unit: 'km' },
        modelName: '4er',
        pictureUrl: '/images/car.png',
        stockNumber: 51,
      }
    ],
  },
  meta: {
    totalCarsCount: 222,
    totalPageCount: 22,
  },
  progress: {},
  localStorage: {
    favoriteCars: [ 51 ],
  }
};
