import { Table as TableAntd } from 'antd'
import styled from 'styled-components'

const Table = styled(TableAntd)`
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #f9f9f9;
    border-top: 1px solid #f9f9f9;
  }

  .ant-table-container .ant-table-content table .ant-table-thead tr th {
    background: transparent;
    color: #999999;
    border: none;
  }

  .row-custom {
    border-radius: 10px;
    border-width: 3px;
    border-style: solid;
  }

  .row-custom td:first-child {
    border-left: 1px solid #f9f9f9;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .row-custom td:last-child {
    border-right: 1px solid #f9f9f9;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .ant-table-content {
    /* background-color: white; */
  }

  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: unset;
  }

  .ant-table-row {
    background-color: #f9f9f9;
  }

  .ant-table table {
    border-spacing: 0 10px;
  }

  thead .ant-table-cell {
    padding: 0 20px !important;
  }

  .ant-table.ant-table-middle .ant-table-title,
  .ant-table.ant-table-middle .ant-table-footer,
  .ant-table.ant-table-middle .ant-table-thead > tr > th,
  .ant-table.ant-table-middle .ant-table-tbody > tr > td,
  .ant-table.ant-table-middle tfoot > tr > th,
  .ant-table.ant-table-middle tfoot > tr > td {
    padding: 12px 20px;
  }

  .ant-table-container table > thead > tr:first-child th:first-child {
    font-weight: 600;
    color: #333333;
  }
`

const TableCustom = (props) => {
  return (
    <Table {...props} rowClassName={() => 'row-custom'} scroll={{ x: true }} pagination={false} />
  )
}

export default TableCustom
