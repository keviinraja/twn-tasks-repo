import { atom, selector } from 'recoil';
import { loadList } from '../requests/table';

export const sortingOrderAtom = atom({
  key: 'sortingOrderAtom',
  default: 'ASC',
});

export const selectedColNameAtom = atom({
  key: 'selectedColNameAtom',
  default: '',
});

export const selectedRowAtom = atom({
  key: 'selectedRowAtom',
  default: null,
});

export const defaultListSelector = selector({
  key: 'defaultListSelector',
  get: async () => {
    return await loadList();
  },
});
