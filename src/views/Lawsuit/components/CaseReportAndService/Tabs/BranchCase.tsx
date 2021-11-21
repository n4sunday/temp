import { ButtonGray } from 'components/Button'
import BranchCaseTable from '../Table/BranchCaseTable'

const BranchCase = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#4D4D4D] font-semibold">รายการคดีสาขา</div>
        <div>
          <ButtonGray>+ เพิ่มคดีสาขา</ButtonGray>
        </div>
      </div>
      <BranchCaseTable />
    </div>
  )
}

export default BranchCase
