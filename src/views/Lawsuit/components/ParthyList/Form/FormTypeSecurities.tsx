import { Radio, Form } from 'antd'
import styled from 'styled-components'

const RadioButton = styled(Radio.Button)`
  font-size: 12px !important;
  color: #808080;
  border: 0 solid #d9d9d9 !important;
  &.ant-radio-button-wrapper:first-child {
    margin-left: 0px;
  }
  &.ant-radio-button-wrapper:last-child {
    margin-right: 0px;
  }
  &.ant-radio-button-wrapper {
    padding: 0 20px;
    background-color: #f2f2f2;
    margin-right: 8px;
    margin-bottom: 14px;
    border-radius: 14px;
  }
  &.ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    z-index: 1;
    color: white;
    background: #1d79ff;
  }
`

const FormTypeSecurities = () => {
  return (
    <div>
      <Form.Item name="radio-button">
        <div className="text-[#808080] font-semibold mb-3">ประเภทหลักทรัพย์</div>
        <Radio.Group>
          <RadioButton value="a">ที่ดิน</RadioButton>
          <RadioButton value="b">ที่ดินพร้อมสิ่งปลูกสร้าง</RadioButton>
          <RadioButton value="c">สิ่งปลูกสร้าง</RadioButton>
          <RadioButton value="d">เครื่องจักร</RadioButton>
          <RadioButton value="e">บัญชีเงินฝาก</RadioButton>
          <RadioButton value="f">พันธบัตร</RadioButton>
          <RadioButton value="g">คอนโดมิเนียม/ห้องชุด</RadioButton>
          <RadioButton value="h">หุ้นกู้</RadioButton>
          <RadioButton value="i">ยานพาหนะ</RadioButton>
        </Radio.Group>
      </Form.Item>
    </div>
  )
}

export default FormTypeSecurities
