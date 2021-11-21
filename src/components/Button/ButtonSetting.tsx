import { Button as ButtonAntd, ButtonProps } from 'antd'
import { SettingFilled } from '@ant-design/icons'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  color: #666666;
  background-color: #e6e6e6;
  border-color: #e6e6e6;

  &:hover,
  &:focus {
    color: #666666;
    border-color: #e6e6e6;
    background: #e6e6e6;
  }
`

const ButtonSetting = (props: ButtonProps) => {
  return (
    <Button {...props} icon={<SettingFilled />} shape="round" type="primary">
      ตั้งค่า
    </Button>
  )
}

export default ButtonSetting
