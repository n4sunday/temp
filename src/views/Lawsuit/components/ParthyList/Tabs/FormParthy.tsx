import { Form } from 'antd'

import { Select, Label, Input } from 'components/Form'
import FormAddress from '../Form/FormAddress'
import FormInformation from '../Form/FormInformation'

const FormParthy = () => {
  return (
    <div>
      <FormInformation />
      <FormAddress />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <Form.Item label={<Label>หมายเลขโทรศัพท์</Label>} name="phone_number">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>อีเมล</Label>} name="email">
          <Input className="w-full" />
        </Form.Item>
      </div>
      <div className="mb-10">
        <div className="text-[#808080] font-semibold mb-3">นายจ้าง</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <Form.Item label={<Label>ชื่อนายจ้าง</Label>} name="">
            <Input className="w-full" />
          </Form.Item>
        </div>
        <div>
          หากคุณยังไม่ได้เพิ่มรายชื่อนายจ้างของคุณ กรุณาเพิ่มข้อมูลที่{' '}
          <span className="text-[#4097FF]">การจัดการนายจ้าง</span>
        </div>
      </div>
    </div>
  )
}

export default FormParthy
