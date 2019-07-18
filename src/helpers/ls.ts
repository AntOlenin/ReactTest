import { LocalStorageKeys } from '../types';

type LocalStorageHelper = (args: { listName: LocalStorageKeys, value: string | number }) => Array<number>;

export const addToList: LocalStorageHelper = ({ listName, value }) => {
  const json = window.localStorage.getItem(listName);
  const list = json ? JSON.parse(json) : [];

  if (list.includes(value)) {
    return;
  }

  const newList = [...list, value];
  window.localStorage.setItem(listName, JSON.stringify(newList));
  return newList;
};

export const removeFromList: LocalStorageHelper = ({ listName, value }) => {
  const json = window.localStorage.getItem(listName);
  const list = json ? JSON.parse(json) : [];

  const newList = list.filter((existingValue: string | number) => existingValue !== value);
  window.localStorage.setItem(listName, JSON.stringify(newList));
  return newList;
};
