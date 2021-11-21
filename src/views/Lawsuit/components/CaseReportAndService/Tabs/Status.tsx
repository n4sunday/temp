import { ButtonGray } from 'components/Button'
import useStatus from 'views/Lawsuit/hooks/caseReportAndSerivce/useStatus'
import StatusStep from '../Step/StatusStep'

const Status = () => {
  const { onOpenAdd } = useStatus()

  return (
    <div>
      <ButtonGray onClick={onOpenAdd}>สร้างสถานะ</ButtonGray>
      <div className="mt-6">
        <StatusStep />
      </div>
    </div>
  )
}

export default Status
