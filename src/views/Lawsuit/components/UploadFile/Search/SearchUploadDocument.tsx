import { ButtonRedGradient } from 'components/Button'
import SearchBase from 'components/Search/SearchBase'
import useParthy from 'views/Lawsuit/hooks/parthy/useParthy'

const SearchUploadDocument = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <SearchBase className="w-full col-span-2" placeholder="ค้นหาคู่ความ" />
      <ButtonRedGradient>อัพโหลดไฟล์</ButtonRedGradient>
    </div>
  )
}

export default SearchUploadDocument
