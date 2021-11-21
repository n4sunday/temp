import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

interface PropsType {
  children?: React.ReactNode
  active?: boolean
  link?: string
}

const HeaderMenuItem = ({ children, active, link = '' }: PropsType) => {
  return (
    <Link to={link}>
      <div
        className={`text-[#666666] rounded-md px-[20px] py-[6px] cursor-pointer select-none ${
          active ? 'bg-white color-[#4D4D4D] shadow-md' : ''
        }`}
      >
        {children}
      </div>
    </Link>
  )
}

const HeaderLawsuit = () => {
  const location = useLocation()

  const path = useMemo(() => {
    let res = location?.pathname.split('/')
    if (res[2]) {
      return res[2]
    }
    return ''
  }, [location?.pathname])

  return (
    <div className="grid grid-cols-12 gap-x-4">
      <div className="col-span-4 mb-4 bg-[#E6E6E6] p-[4px] flex justify-between border border-[#CCCCCC] rounded-lg">
        <HeaderMenuItem active={path === 'parthy'} link="/lawsuit/parthy">
          รายการคู่ความ
        </HeaderMenuItem>
        <HeaderMenuItem active={path === 'report_service'} link="/lawsuit/report_service">
          รายงานคดีเเละงานบริการ
        </HeaderMenuItem>
        <HeaderMenuItem active={path === 'upload_file'} link="/lawsuit/upload_file">อัพโหลดไฟล์</HeaderMenuItem>
      </div>
    </div>
  )
}

export default HeaderLawsuit
