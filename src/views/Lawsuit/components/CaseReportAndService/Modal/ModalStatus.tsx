import { Modal, Form } from 'antd'
import ControlModal from 'components/Control/ControlModal'
import ControlModalEdit from 'components/Control/ControlModalEdit'
import useStatus from 'views/Lawsuit/hooks/caseReportAndSerivce/useStatus'

import FormStatus from '../Form/FormStatus'

const ModalStatus = () => {
  const { visibleAdd, visibleEdit, onCancel } = useStatus()

  return (
    <Modal
      title={visibleAdd ? 'สร้างสถานะ' : 'รายละเอียด'}
      visible={visibleAdd || visibleEdit}
      onCancel={onCancel}
      destroyOnClose
      width={550}
      style={{ top: 30 }}
      footer={
        visibleAdd ? <ControlModal onCancel={onCancel} /> : <ControlModalEdit onDelete={() => {}} />
      }
    >
      <Form layout="vertical">
        <FormStatus />
      </Form>
    </Modal>
  )
}

export default ModalStatus
