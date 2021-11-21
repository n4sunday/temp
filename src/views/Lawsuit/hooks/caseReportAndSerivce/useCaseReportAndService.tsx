import { useMemo, useState } from 'react'

import { VISIBLE_CASE_REPORT_AND_SERVICE, VISIBLE_TYPE } from 'interfaces/enums'
import { CaseReportAndServiceStore } from 'stores'

export const useCaseReportAndService = () => {
  const { visibleModal, visibleType, visibleTab, setVisibleModal, setVisibleType, setVisibleTab } =
    CaseReportAndServiceStore()

  const visibleAdd = useMemo(() => {
    if (
      visibleModal &&
      visibleType === VISIBLE_TYPE.ADD &&
      visibleTab === VISIBLE_CASE_REPORT_AND_SERVICE.GENERAL
    ) {
      return true
    }
  }, [visibleModal, visibleType, visibleTab])

  const onOpenAdd = () => {
    setVisibleModal(true)
    setVisibleType(VISIBLE_TYPE.ADD)
    setVisibleTab(VISIBLE_CASE_REPORT_AND_SERVICE.GENERAL)
  }

  const onCancel = () => {
    setVisibleModal(false)
    setVisibleType(VISIBLE_TYPE.OFF)
    setVisibleTab(VISIBLE_CASE_REPORT_AND_SERVICE.NOT)
  }

  return { visibleAdd, onOpenAdd, onCancel }
}

export default useCaseReportAndService
