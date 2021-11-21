import { VISIBLE_CASE_REPORT_AND_SERVICE, VISIBLE_TYPE } from 'interfaces/enums'
import { useMemo } from 'react'
import { CaseReportAndServiceStore } from 'stores'

const useStatus = () => {
  const { visibleModal, visibleType, visibleTab, setVisibleModal, setVisibleType, setVisibleTab } =
    CaseReportAndServiceStore()

  const visibleAdd = useMemo(() => {
    if (
      visibleModal &&
      visibleType === VISIBLE_TYPE.ADD &&
      visibleTab === VISIBLE_CASE_REPORT_AND_SERVICE.STATUS
    ) {
      return true
    }
  }, [visibleModal, visibleType, visibleTab])

  const visibleEdit = useMemo(() => {
    if (
      visibleModal &&
      visibleType === VISIBLE_TYPE.EDIT &&
      visibleTab === VISIBLE_CASE_REPORT_AND_SERVICE.STATUS
    ) {
      return true
    }
  }, [visibleModal, visibleType, visibleTab])

  const onOpenAdd = () => {
    setVisibleModal(true)
    setVisibleType(VISIBLE_TYPE.ADD)
    setVisibleTab(VISIBLE_CASE_REPORT_AND_SERVICE.STATUS)
  }

  const onOpenEdit = () => {
    setVisibleModal(true)
    setVisibleType(VISIBLE_TYPE.EDIT)
    setVisibleTab(VISIBLE_CASE_REPORT_AND_SERVICE.STATUS)
  }

  const onCancel = () => {
    setVisibleModal(false)
    setVisibleType(VISIBLE_TYPE.OFF)
    setVisibleTab(VISIBLE_CASE_REPORT_AND_SERVICE.NOT)
  }

  return { visibleAdd, onOpenAdd, visibleEdit, onOpenEdit, onCancel }
}

export default useStatus
