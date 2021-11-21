import { ButtonGray } from 'components/Button'
import LitigationListTable from '../Table/LitigationListTable'

const LitigationList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#4D4D4D] font-semibold">รายการคู่ความ</div>
        <div>
          <ButtonGray>+ เพิ่มคู่ความ</ButtonGray>
        </div>
      </div>
      <LitigationListTable />
    </div>
  )
}

export default LitigationList
