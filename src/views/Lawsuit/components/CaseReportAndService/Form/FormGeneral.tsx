import { Form } from 'antd'
import React from 'react'

import { Input, Label, Select } from 'components/Form'

const FormGeneral = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
        <Form.Item label={<Label>รหัสคดี</Label>} name="title">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ฝ่ายการดำเนินคดี</Label>} name="name">
          <Select className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 mb-4">
        <Form.Item label={<Label>ประเภทงาน</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>กลุ่มงาน</Label>} name="name">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>กลุ่มงานย่อย</Label>} name="name">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ศาล / สำนักงาน</Label>} name="name">
          <Select className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4">
        <Form.Item
          label={<Label>หมายเลขคดีดำ/หมายคดีเเดง/เลขที่รับงาน</Label>}
          name="title"
          className="col-span-1 lg:col-span-2"
        >
          <Input className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 mb-4">
        <Form.Item label={<Label>พนักงานดูเเลคดี</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>ทนายความ</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 mb-4">
        <Form.Item label={<Label>สถานะปัจจุบัน</Label>} name="title">
          <Select className="w-full" />
        </Form.Item>
        <Form.Item label={<Label>วันที่สถานะปัจจุบัน</Label>} name="title">
          <Input className="w-full" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <Form.Item label={<Label>นายจ้าง</Label>} name="">
          <Input className="w-full" />
        </Form.Item>
      </div>
      <div className="mb-10">
        หากคุณยังไม่ได้เพิ่มรายชื่อนายจ้างของคุณ กรุณาเพิ่มข้อมูลที่{' '}
        <span className="text-[#4097FF]">การจัดการนายจ้าง</span>
      </div>
    </React.Fragment>
  )
}

export default FormGeneral
