import { Input as InputAntd, InputProps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Input = styled(InputAntd)`
  border-radius: 8px;
  &:hover {
    border-color: #cccccc !important;
  }
`

const SearchBase = (props: InputProps) => {
  return <Input {...props} type="primary" prefix={<SearchOutlined />} />
}

export default SearchBase
