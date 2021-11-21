import { Button as ButtonAntd, ButtonProps } from 'antd'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  color: #1a1a1a;
  border-radius: 8px;
  border-color: #1a1a1a;
  padding: 4px 20px;

  &:hover,
  &:focus {
    color: #1a1a1a;
    border-color: #1a1a1a;
  }
`

const ButtonBlackOutline = (props: ButtonProps) => {
  return <Button {...props} />
}

export default ButtonBlackOutline
