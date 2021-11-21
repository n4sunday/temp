import { Space } from 'antd'

import { ButtonSetting } from 'components/Button'
import MainContainer from 'components/Containers/MainContainer'

const Footer = () => {
  return (
    <MainContainer className="border-t min-h-[55px] items-center z-50 bg-white">
      <div className="flex items-center justify-between">
        <Space className="flex items-center">
          <ButtonSetting />
          <div className="text-[#666666]">นโยบายความเป็นส่วนตัว | ข้อกำหนดและเงื่อนไข | กฎหมาย</div>
        </Space>
        <div className="text-[#B3B3B3]">Coppyright © 2021 iLaws. All rights reserved</div>
      </div>
    </MainContainer>
  )
}

export default Footer
