import { Button as ButtonAntd, ButtonProps } from 'antd'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  color: #666666;
  background: #e6e6e6;
  border-radius: 10px;
  border: none;
  padding: 4px 20px;

  &:hover,
  &:focus {
    color: #666666;
    background: #e6e6e6;
    border: none;
  }
`

const ButtonGray = (props: ButtonProps) => {
  return <Button {...props} />
}

export default ButtonGray
