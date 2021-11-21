import React from 'react'
import { Form } from 'antd'

import { Input, Label, Select } from 'components/Form'

const FormSecurities = () => {
  return (
    <React.Fragment>
      <div className="text-[#808080] font-semibold mb-3">รายละเอียดหลักทรัพย์</div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
        <Form.Item label={<Label>เลขที่ทรัพย์</Label>} name="name">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ชื่อทรัพย์</Label>} name="name">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>เลขทะเบียนเครื่องจักร</Label>} name="name">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>แหล่งที่มา</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>สถานะทรัพย์</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ภาระผูกพัน</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ผู้รับจำนอง/ผู้อายัด</Label>} name="title">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>วงเงินจำนอง (บาท)</Label>} name="title">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>วงเงินจำนอง (บาท)</Label>} name="title" className="col-span-1 lg:col-span-2">
          <Input className="w-full" />
        </Form.Item>
      </div>
    </React.Fragment>
  )
}

export default FormSecurities
