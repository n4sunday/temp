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
        <ColumnItem className="col-span-3 text-[#4D4D4D] font-semibold">CS002</ColumnItem>
        <ColumnItem className="col-span-8 text-[#666666] font-medium">โจทก์ - นางสุดสวย สายหยุด</ColumnItem>
        <ColumnItem className="col-span-8 text-[#666666] font-medium">คดีความ | คดีเเพ่ง | คดีผู้บริโภค</ColumnItem>
        <ColumnItem className="col-span-3 text-[#666666] font-medium">ยื่นฟ้อง</ColumnItem>
        <ColumnItem className="col-span-1 text-[#666666]">
          <Button type="text">
            <DashOutlined />
          </Button>
        </ColumnItem>
      </React.Fragment>
    </div>
  )
}

const BranchCaseTable = () => {
  return (
    <div>
      <div className="grid grid-cols-24 py-2 px-4">
        <React.Fragment>
          <div className="col-span-3 text-[#333333] font-semibold">รหัสคดี</div>
          <div className="col-span-8 text-[#999999]">รายละเอียด</div>
          <div className="col-span-8 text-[#999999]">ประเภท</div>
          <div className="col-span-3 text-[#999999]">สถานะ</div>
          <div className="col-span-1"/>
        </React.Fragment>
      </div>
      {[0, 0, 0, 0].map(() => (
        <Column />
      ))}
    </div>
  )
}

export default BranchCaseTable
