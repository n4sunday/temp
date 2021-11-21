import { Avatar, Button, Space } from 'antd'
import { UserOutlined, DashOutlined } from '@ant-design/icons'

interface PropsType {
  children?: React.ReactNode
}

interface PropsTypeTopSection {
  header?: string
  children?: React.ReactNode
}

const TopSection = ({ header, children }: PropsTypeTopSection) => {
  return (
    <div className="px-3">
      <div className="font-semibold mb-2">{header}</div>
      <div className="text-xs text-[#999999]">{children}</div>
    </div>
  )
}

interface PropsTypeBottomSection {
  image?: string
  title?: string
  des?: string
  date?: string
}

const BottomSection = ({ image, title, des, date }: PropsTypeBottomSection) => {
  return (
    <div className="px-3 grid grid-cols-8 gap-1">
      <Space className="col-span-6 flex">
        <div>
          <Avatar size="small" icon={<UserOutlined />} />
        </div>
        <div className="text-xs">
          <div className="font-semibold text-[#4D4D4D]">{title}</div>
          <div className="text-[#999999]">{des}</div>
        </div>
      </Space>
      <div className="col-span-2 text-[#B3B3B3] text-xs flex items-center justify-end">{date}</div>
    </div>
  )
}

const CardListItemContainer = ({ children }: PropsType) => {
  return (
    <div className="py-2 border rounded-lg bg-white flex flex-col cursor-pointer relative">
      <div className="absolute top-0 right-0">
        <Button type="text">
          <DashOutlined />
        </Button>
      </div>
      {children}
    </div>
  )
}

export default CardListItemContainer
export { BottomSection, TopSection }
