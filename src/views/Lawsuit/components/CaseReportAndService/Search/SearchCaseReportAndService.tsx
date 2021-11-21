import { ButtonRedGradient } from 'components/Button'
import SearchBase from 'components/Search/SearchBase'
import { useCaseReportAndService } from 'views/Lawsuit/hooks'

const SearchCaseReportAndService = () => {
  const { onOpenAdd } = useCaseReportAndService()

  return (
    <div className="grid grid-cols-3 gap-2">
      <SearchBase className="w-full col-span-2" placeholder="ค้นหาคู่ความ" />
      <ButtonRedGradient onClick={onOpenAdd}>สร้างคดี</ButtonRedGradient>
    </div>
  )
}

export default SearchCaseReportAndService
