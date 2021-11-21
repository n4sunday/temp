import create from 'zustand'

import { VISIBLE_CASE_REPORT_AND_SERVICE, VISIBLE_TYPE } from 'interfaces/enums'
import { GarunteeType } from './garuntee.type'
import { Steps } from 'antd'

export const GarunteeStore = create<GarunteeType>((set, get) => ({
  visibleModal: false,
  visibleType: VISIBLE_TYPE.OFF,
  setVisibleModal: (data) => set({ visibleModal: data }),
  setVisibleType: (data) => set({ visibleType: data }),
}))
