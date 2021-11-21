import React from 'react'
import { DashOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import styled from 'styled-components'
import tw from 'twin.macro'

const ColumnItem = styled.div`
  ${tw`flex items-center`}
`

const Column = () => {
  return (
    <div className="grid grid-cols-24 py-3 bg-[#F9F9F9] my-3 px-4 rounded-lg">
      <React.Fragment>
        <ColumnItem className="col-span-4 text-[#4D4D4D] font-semibold">P001</ColumnItem>
        <ColumnItem className="col-span-8 text-[#666666] font-medium">นายวิรัช โรจน์รัช</ColumnItem>
        <ColumnItem className="col-span-5 text-[#666666] font-medium">บุคคลธรรมดา</ColumnItem>
        <ColumnItem className="col-span-6 text-[#666666] font-medium">8 2789 3562 52 7</ColumnItem>
        <ColumnItem className="col-span-1 text-[#666666]">
          <Button type="text">
            <DashOutlined />
          </Button>
        </ColumnItem>
      </React.Fragment>
    </div>
  )
}

const LitigationListTable = () => {
  return (
    <div>
      <div className="grid grid-cols-24 py-2 px-4">
        <React.Fragment>
          <div className="col-span-4 text-[#333333] font-semibold">รหัสคู่ความ</div>
          <div className="col-span-8 text-[#999999]">ชื่อคู่ความ</div>
          <div className="col-span-5 text-[#999999]">ประเภทคู่ความ</div>
          <div className="col-span-6 text-[#999999]">เลขประจำตัวประชาชน</div>
          <div className="col-span-1 text-[#999999]"></div>
        </React.Fragment>
      </div>
      {[0, 0, 0, 0].map(() => (
        <Column />
      ))}
    </div>
  )
}

export default LitigationListTable
