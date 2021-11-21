import create from 'zustand'

import { VISIBLE_TYPE } from 'interfaces/enums'
import { ParthyType } from './parthy.type'

export const ParthyStore = create<ParthyType>((set, get) => ({
  visibleModal: false,
  visibleType: VISIBLE_TYPE.OFF,
  setVisibleModal: (data) => set({ visibleModal: data }),
  setVisibleType: (data) => set({ visibleType: data }),
}))
