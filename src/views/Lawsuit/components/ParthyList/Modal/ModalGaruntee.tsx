import { Modal, Form } from 'antd'

import ControlModal from 'components/Control/ControlModal'
import { useGaruntee } from 'views/Lawsuit/hooks'
import FormGaruntee from '../Form/FormGaruntee'

const ModalGaruntee = () => {
  const { visibleAdd, onCancelGaruntee } = useGaruntee()
  const [form] = Form.useForm()

  return (
    <Modal
      title="เพิ่มทรัพย์"
      visible={visibleAdd}
      onCancel={onCancelGaruntee}
      destroyOnClose
      width={850}
      footer={<ControlModal onCancel={onCancelGaruntee} />}
    >
      <Form layout="vertical" form={form}>
        <FormGaruntee />
      </Form>
    </Modal>
  )
}

export default ModalGaruntee
