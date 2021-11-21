import { Button as ButtonAntd, Space } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  padding: 4px 25px;
  border-radius: 6px;
  &.ant-btn-primary {
    border-color: #1a1a1a;
    background: #1a1a1a;
  }
`

interface PropsType {
  onSave?: () => void
  onCancel?: () => void
}

const ControlModal = ({ onCancel, onSave }: PropsType) => {
  return (
    <div className="flex justify-end">
      <Space>
        <Button type="text" onClick={onCancel}>
          ยกเลิก
        </Button>
        <Button type="primary" onClick={onSave}>
          บันทึก
        </Button>
      </Space>
    </div>
  )
}

export default ControlModal
