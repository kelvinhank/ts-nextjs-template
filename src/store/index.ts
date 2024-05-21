import { create } from 'zustand';

import { ICommonState } from '@/type';

import { commonSlice } from './slices';

type rootStore = ICommonState;

export const useStore = create<rootStore>()((...a) => ({
  ...commonSlice(...a),
}));
