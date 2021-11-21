import create from 'zustand'

import { VISIBLE_CASE_REPORT_AND_SERVICE, VISIBLE_TYPE } from 'interfaces/enums'
import { CaseReportAndServiceType } from './caseReportAndService.type'

export const CaseReportAndServiceStore = create<CaseReportAndServiceType>((set, get) => ({
  visibleModal: false,
  visibleType: VISIBLE_TYPE.OFF,
  visibleTab: VISIBLE_CASE_REPORT_AND_SERVICE.NOT,
  setVisibleModal: (data) => set({ visibleModal: data }),
  setVisibleType: (data) => set({ visibleType: data }),
  setVisibleTab: (data) => set({ visibleTab: data }),
}))
