import { Modal, Form } from 'antd'
import ControlModal from 'components/Control/ControlModal'
import { useCaseReportAndService } from 'views/Lawsuit/hooks'

import FormGeneral from '../Form/FormGeneral'

const ModalCaseReportAndService = () => {
  const { visibleAdd, onCancel } = useCaseReportAndService()

  return (
    <Modal
      title="เพิ่มคดีความหรืองานบริการ"
      visible={visibleAdd}
      onCancel={onCancel}
      destroyOnClose
      width={720}
      style={{ top: 30 }}
      footer={<ControlModal onCancel={onCancel} />}
    >
      <Form layout="vertical">
        <FormGeneral />
      </Form>
    </Modal>
  )
}

export default ModalCaseReportAndService
