import { Modal, Form } from 'antd'
import ControlModal from 'components/Control/ControlModal'

import { useParthy } from 'views/Lawsuit/hooks'
import FormParthy from '../Tabs/FormParthy'

const ModalParthy = () => {
  const { visibleAdd, onCancelParthy } = useParthy()

  return (
    <Modal
      title="เพิ่มคู่ความ"
      visible={visibleAdd}
      onCancel={onCancelParthy}
      destroyOnClose
      width={720}
      style={{ top: 30 }}
      footer={<ControlModal onCancel={onCancelParthy} />}
    >
      <Form layout="vertical">
        <FormParthy />
      </Form>
    </Modal>
  )
}

export default ModalParthy
