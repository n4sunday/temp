import TableCustom from 'components/Table'
import GarunteeColumn from './GarunteeColumn'

const GarunteeTable = () => {
  return (
    <div className="mb-10">
      <TableCustom size="middle" columns={GarunteeColumn()} dataSource={[0, 0, 0, 0, 0]} />
    </div>
  )
}

export default GarunteeTable
