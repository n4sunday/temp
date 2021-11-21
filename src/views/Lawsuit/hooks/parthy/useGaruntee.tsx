import { VISIBLE_TYPE } from 'interfaces/enums'
import { useMemo, useState } from 'react'
import { GarunteeStore } from 'stores'

export const useGaruntee = () => {
  const { visibleModal, visibleType, setVisibleModal, setVisibleType } = GarunteeStore()

  const visibleAdd = useMemo(() => {
    if (visibleModal && visibleType === VISIBLE_TYPE.ADD) {
      return true
    }
  }, [visibleModal, visibleType])

  const onAddGaruntee = () => {
    setVisibleModal(true)
    setVisibleType(VISIBLE_TYPE.ADD)
  }

  const onCancelGaruntee = () => {
    setVisibleModal(false)
    setVisibleType(VISIBLE_TYPE.OFF)
  }

  return { visibleAdd, onAddGaruntee, onCancelGaruntee }
}

export default useGaruntee
