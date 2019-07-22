import { LocalStorageKeys } from '../types';

type LocalStorageHelper = (args: { listName: LocalStorageKeys, value: number }) => Array<number>;
type GetLocalStorageList = (listName: LocalStorageKeys) => Array<number>;

export const getLocalStorageList: GetLocalStorageList = (listName) => {
  const json = window.localStorage.getItem(listName);
  return json ? JSON.parse(json) : [];
};

export const addToLocalStorageList: LocalStorageHelper = ({ listName, value }) => {
  const list = getLocalStorageList(listName);

  if (list.includes(value)) {
    return list;
  }

  const newList = [...list, value];
  window.localStorage.setItem(listName, JSON.stringify(newList));
  return newList;
};

export const removeFromLocalStorageList: LocalStorageHelper = ({ listName, value }) => {
  const list = getLocalStorageList(listName);

  const newList = list.filter((existingValue: number) => existingValue !== value);
  window.localStorage.setItem(listName, JSON.stringify(newList));
  return newList;
};
