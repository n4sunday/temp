import { Button as ButtonAntd, ButtonProps } from 'antd'
import { SettingFilled } from '@ant-design/icons'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  color: white;
  background: rgb(255, 55, 144);
  border-radius: 8px;
  background: linear-gradient(150deg, rgba(255, 55, 144, 1) 0%, rgba(255, 159, 43, 1) 100%);
  border: none;

  &:hover,
  &:focus {
    color: white;
    border: none;
    background: rgb(255, 55, 144);
    background: linear-gradient(150deg, rgba(255, 55, 144, 1) 0%, rgba(255, 159, 43, 1) 100%);
  }
`

const ButtonRedGradient = (props: ButtonProps) => {
  return <Button {...props} type="primary" />
}

export default ButtonRedGradient
