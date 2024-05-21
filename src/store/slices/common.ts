import { StateCreator } from 'zustand';

import { ICommonState } from '@/type';

export const commonSlice: StateCreator<ICommonState> = (set) => {
  return {
    modalType: '',
  };
};
