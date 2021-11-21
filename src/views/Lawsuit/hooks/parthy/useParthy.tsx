import { VISIBLE_TYPE } from 'interfaces/enums'
import { useMemo } from 'react'
import { PathyService } from 'services'
import { ParthyStore } from 'stores'

export const useParthy = () => {
  const { visibleModal, visibleType, setVisibleModal, setVisibleType } = ParthyStore()

  const visibleAdd = useMemo(() => {
    if (visibleModal && visibleType === VISIBLE_TYPE.ADD) {
      return true
    }
  }, [visibleModal, visibleType])

  const onAddParthy = () => {
    setVisibleModal(true)
    setVisibleType(VISIBLE_TYPE.ADD)
  }

  const onCancelParthy = () => {
    setVisibleModal(false)
    setVisibleType(VISIBLE_TYPE.OFF)
  }

  const fetchData = async () => {
    try {
      let res = await PathyService.getAll({
        limit: 10,
        page: 1,
        searchKey: 'PARTHY_CODE',
        searchValue: 'TEST',
        sortKey: 'PARTHY_CODE',
        sortValue: 'DESC',
      })
      console.log(res?.data)
    } catch (error) {}
  }

  const initialData = () => {
    fetchData()
  }

  return { visibleAdd, onAddParthy, onCancelParthy, initialData }
}

export default useParthy
