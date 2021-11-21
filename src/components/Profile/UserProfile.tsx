import { Avatar, Dropdown, Space, Menu, Button as ButtonAntd } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Button = styled(ButtonAntd)`
  border: none;
  color: #4d4d4d;
  &:hover {
    color: #4d4d4d;
  }
`

const UserProfile = () => {
  const menu = (
    <Menu>
      <Menu.Item>ตั้งค่า</Menu.Item>
    </Menu>
  )

  return (
    <Space className="flex items-center bg-white z-50">
      <Avatar size="large" icon={<UserOutlined />} />
      <div>
        <div className="text-[#4D4D4D] font-semibold">John Show</div>
        <div className="text-[#999999] text-xs">ผู้จัดการ</div>
      </div>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  )
}

export default UserProfile
