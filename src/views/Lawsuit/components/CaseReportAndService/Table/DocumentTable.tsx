import TableCustom from 'components/Table'
import React from 'react'
import DocumentColumn from './DocumentColumn'

const demo = [
  { name: 'เอกสารประกอบหลักฐาน', size: '12 KB', type: 'PDF', date: '1/ก.ย./2563 | 21:00' },
  { name: 'หมายศาล', size: '15 KB', type: 'PDF', date: '1/ก.ย./2563 | 21:00' },
]

const DocumentTable = () => {
  return (
    <div>
      <TableCustom size="middle" columns={DocumentColumn()} dataSource={demo} />
    </div>
  )
}

export default DocumentTable
