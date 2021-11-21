const GarunteeColumn = () => {
  const columns = [
    {
      title: 'รหัสทรัพย์',
      dataIndex: '',
      editable: true,
      render: (data) => <span className="font-semibold text-[#333333]">{data}</span>,
    },
    {
      title: 'ชื่อทรัพย์',
      dataIndex: '',
      editable: true,
    },
    {
      title: 'ประเภททรัพย์',
      dataIndex: '',
      editable: true,
    },
    {
      title: 'แหล่งที่มาของทรัพย์',
      dataIndex: '',
      editable: true,
    },
    {
      title: 'สถานะทรัพย์',
      dataIndex: '',
      editable: true,
    },
    {
      title: '',
      dataIndex: '',
      editable: true,
    },
  ]
  return columns
}

export default GarunteeColumn
