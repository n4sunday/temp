import { EllipsisOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Steps from 'components/Step'
import React, { useState } from 'react'
import useStatus from 'views/Lawsuit/hooks/caseReportAndSerivce/useStatus'

interface PropsTypeStepHeader {
  children?: React.ReactNode
  onEdit?: () => void
}

const StepHeader = ({ children, onEdit }: PropsTypeStepHeader) => {
  return (
    <div className="w-[300px] flex justify-between">
      {children}
      <Button
        onClick={onEdit}
        type="text"
        shape="circle"
        icon={<EllipsisOutlined className="transform rotate-90" />}
      ></Button>
    </div>
  )
}

const demo = [
  { title: 'แจ้งความ', date: '1/ก.ย./2563', note: 'นัดเจอกับลูกค้าที่หน้า สน. 10 โมง' },
  { title: 'ยื่นฟ้อง', date: '1/ก.ย./2563', note: 'นัดเจอกับลูกค้าที่หน้า สน. 10 โมง' },
  { title: 'ยื่นคำให้การ (ฝ่ายจำเลย)', date: '1/ก.ย./2563', note: '' },
  { title: 'ยื่นขยายคำให้การ', date: '1/ก.ย./2563', note: '' },
]

const StatusStep = () => {
  const { onOpenEdit } = useStatus()
  
  return (
    <React.Fragment>
      <Steps direction="vertical" current={1}>
        {demo?.map((item, idx) => (
          <Steps.Step
            key={idx}
            title={<StepHeader onEdit={onOpenEdit}>{item?.title}</StepHeader>}
            description={
              <div className="mb-10">
                <div className="font-semibold">{item?.date}</div>
                <div>หมายเหตุ : {item?.note ? item?.note : '-'}</div>
              </div>
            }
          />
        ))}
      </Steps>
    </React.Fragment>
  )
}

export default StatusStep
