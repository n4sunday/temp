import { Form } from 'antd'
import React from 'react'

import { Input, Label, Select } from 'components/Form'

const FormStatus = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <Form.Item label={<Label>ลำดับ</Label>} name="">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>สถานะ</Label>} name="">
          <Select className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 mb-4">
        <Form.Item label={<Label>หมายเหตุ</Label>} name="">
          <Input className="w-full" placeholder="กรอกหมายเหตุ" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <Form.Item label={<Label>กำหนดการ</Label>} name="">
          <Input className="w-full" />
        </Form.Item>
      </div>
    </React.Fragment>
  )
}

export default FormStatus
