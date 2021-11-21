import React, { useState } from 'react'
import { Form } from 'antd'

import { Select, Label, Input } from 'components/Form'

enum TITLE_TYPE {
  PERSONAL = 'personal',
  COMPANY = 'company',
}

const FormInformation = () => {
  const [type, setType] = useState(TITLE_TYPE.PERSONAL)

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4">
        <Form.Item label={<Label>ประเภท</Label>} name="type">
          <Select
            defaultValue={TITLE_TYPE.PERSONAL}
            className="w-full"
            onChange={(e) => setType(e as TITLE_TYPE)}
          >
            <Select.Option value={TITLE_TYPE.PERSONAL}>บุคคลธรรมดา</Select.Option>
            <Select.Option value={TITLE_TYPE.COMPANY}>นิติบุคคล</Select.Option>
          </Select>
        </Form.Item>
      </div>
      {type === TITLE_TYPE.PERSONAL && (
        <React.Fragment>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
            <Form.Item label={<Label>คำนำหน้า</Label>} name="title">
              <Select className="w-full" />
            </Form.Item>
            <Form.Item label={<Label>ชื่อ</Label>} name="name">
              <Input className="w-full" />
            </Form.Item>
            <Form.Item label={<Label>สกุล</Label>} name="last_name">
              <Input className="w-full" />
            </Form.Item>
            <Form.Item label={<Label>วันเกิด</Label>} name="birthday">
              <Select className="w-full" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4">
            <Form.Item label={<Label>เชื้อชาติ</Label>} name="ethnicity">
              <Select className="w-full" />
            </Form.Item>
            <Form.Item label={<Label>สัญชาติ</Label>} name="nationality">
              <Select className="w-full" />
            </Form.Item>
            <Form.Item
              className="col-span-1 lg:col-span-2"
              label={<Label>เลขประจำตัวประชาชน/เลขพาสปอร์ต</Label>}
              name="nation_id"
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item label={<Label>อาชีพ</Label>} name="occupation">
              <Input className="w-full" />
            </Form.Item>
          </div>
        </React.Fragment>
      )}
      {type === TITLE_TYPE.COMPANY && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4">
          <Form.Item label={<Label>คำนำหน้า</Label>} name="title">
            <Select className="w-full" />
          </Form.Item>
          <Form.Item label={<Label>ชื่อ</Label>} name="name">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item label={<Label>เลขนิติบุคคล</Label>} name="nation_id">
            <Select className="w-full" />
          </Form.Item>
        </div>
      )}
    </React.Fragment>
  )
}

export default FormInformation
