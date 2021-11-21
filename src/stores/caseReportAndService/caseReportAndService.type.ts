import { VISIBLE_CASE_REPORT_AND_SERVICE, VISIBLE_TYPE } from 'interfaces/enums'

export type CaseReportAndServiceType = {
  visibleModal: boolean
  visibleType: VISIBLE_TYPE
  visibleTab: VISIBLE_CASE_REPORT_AND_SERVICE
  setVisibleModal: (data: boolean) => void
  setVisibleType: (data: VISIBLE_TYPE) => void
  setVisibleTab: (data: VISIBLE_CASE_REPORT_AND_SERVICE) => void
}
