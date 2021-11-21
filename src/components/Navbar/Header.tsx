import { Space } from 'antd'
import { useLocation } from 'react-router'
import {
  HomeOutlined,
  BookOutlined,
  FolderOpenOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'

import MainContainer from 'components/Containers/MainContainer'
import MenuItem from 'components/Menu/MenuItem'
import UserProfile from 'components/Profile/UserProfile'
import { useMemo } from 'react'

const Header = () => {
  const location = useLocation()

  const path = useMemo(() => {
    let res = location?.pathname.split('/')
    if (res[1]) {
      return res[1]
    }
    return ''
  }, [location?.pathname])

  return (
    <MainContainer className="shadow-md min-h-[60px] items-center z-50 bg-white">
      <div className="grid grid-cols-10">
        <div className="col-span-2 flex items-center">
          <div className="text-2xl">iLaws</div>
        </div>
        <Space className="col-span-6 flex items-center justify-center">
          <MenuItem name="หน้าแรก" active={path === 'home'} link="/home">
            <HomeOutlined />
          </MenuItem>
          <MenuItem name="คดีความและบริการ" active={path === 'lawsuit'} link="/lawsuit/parthy">
            <BookOutlined />
          </MenuItem>
          <MenuItem name="การจัดการ" active={path === 'management'} link="/management">
            <FolderOpenOutlined />
          </MenuItem>
          <MenuItem name="บัญชีและการเงิน" active={path === 'finance'} link="/finance">
            <DollarCircleOutlined />
          </MenuItem>
        </Space>
        <div className="col-span-2 flex items-center justify-end">
          <UserProfile />
        </div>
      </div>
    </MainContainer>
  )
}

export default Header
