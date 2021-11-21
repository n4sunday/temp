const DocumentColumn = () => {
  const columns = [
    {
      title: 'ชื่อไฟล์',
      dataIndex: 'name',
      editable: true,
      render: (data) => <span className="font-semibold text-[#333333]">{data}</span>,
    },
    {
      title: 'ขนาดไฟล์',
      dataIndex: 'size',
      editable: true,
    },
    {
      title: 'ประเภท',
      dataIndex: 'type',
      editable: true,
    },
    {
      title: 'วันที่อัพโหลด',
      dataIndex: 'date',
      editable: true,
    },
  ]
  return columns
}

export default DocumentColumn
