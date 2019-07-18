import { ICar } from '../types';

type CarHelper = (car: ICar) => string;

export const getCarTitle: CarHelper = (car) => {
  const { manufacturerName, modelName } = car;
  return `${manufacturerName} ${modelName}`;
};

export const getCarInfo: CarHelper = (car) => {
  const { stockNumber, mileage: { number, unit }, fuelType, color } = car;
  return `Stock # ${stockNumber} - ${number} ${unit} - ${fuelType} - ${color}`;
};
