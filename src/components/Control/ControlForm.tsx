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
  onDelete?: () => void
  onSave?: () => void
  onCancel?: () => void
}

const ControlForm = ({ onCancel, onSave, onDelete }: PropsType) => {
  return (
    <div className="flex justify-between px-4 py-3 border-t">
      <Button danger onClick={onDelete}>
        ลบ
      </Button>
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

export default ControlForm
