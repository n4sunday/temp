import React from 'react'
import { Form } from 'antd'

import { Select, Label, Input } from 'components/Form'

const FormAddress = () => {
  return (
    <React.Fragment>
      <div className="text-[#808080] font-semibold mb-3">รายละเอียดที่อยู่</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4">
        <Form.Item label={<Label>เลขที่</Label>} name="house_no">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ตึก</Label>} name="building">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ชั้น</Label>} name="floor">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>หมู่</Label>} name="moo">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ซอย</Label>} name="soi">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ถนน</Label>} name="road">
          <Input className="w-full" />
        </Form.Item>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
        <Form.Item label={<Label>จังหวัด</Label>} name="province">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>อำเภอ</Label>} name="district">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ตำบล</Label>} name="sub_district">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>รหัสไปรษณีย์</Label>} name="zip">
          <Select className="w-full" />
        </Form.Item>
      </div>
    </React.Fragment>
  )
}

export default FormAddress
