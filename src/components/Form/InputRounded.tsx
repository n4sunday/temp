import { Input as InputAntd } from 'antd'
import styled from 'styled-components'

export const InputRounded = styled(InputAntd)`
  &.ant-input {
    border-radius: 20px;
    border: 1px solid #e6e6e6 !important;
    box-shadow: none !important;
  }
`

export default InputRounded
