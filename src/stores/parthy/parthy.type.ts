import { VISIBLE_TYPE } from 'interfaces/enums'

export type ParthyType = {
  visibleModal: boolean
  visibleType: VISIBLE_TYPE
  setVisibleModal: (data: boolean) => void
  setVisibleType: (data: VISIBLE_TYPE) => void
}
