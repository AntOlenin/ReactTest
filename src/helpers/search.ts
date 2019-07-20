import { FilterParams, FilterKeys } from '../types';

type RemoveEmptyParams = (args: FilterParams) => FilterParams;

export const removeEmptyParams: RemoveEmptyParams = (params) => {
  const keys = Object.keys(params) as Array<FilterKeys>;

  return keys.reduce((acc, key) => {
    if (params[key] === '') {
      return acc;
    }

    return {
      ...acc,
      [key]: params[key],
    }
  }, {})
};
