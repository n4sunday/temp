import { Divider as DividerAntd } from 'antd'
import styled from 'styled-components'
import CardListItemContainer, {
  BottomSection,
  TopSection,
} from '../../Common/Card/CardListItemContainer'

const Divider = styled(DividerAntd)`
  margin: 12px 0;
`

const CardCaseReportAndService = () => {
  return (
    <CardListItemContainer>
      <TopSection header="โจทก์ - นายวิรัช โรจน์รัช">
        <div className="flex justify-between">
          <div>คดีความ | คดีเเพ่ง | คดีผู้บริโภค | ศาลเเพ่งรัชดา</div>
          <div className="text-[#FF7F00] font-semibold">พิพากษาชั้นอุทธรณ์</div>
        </div>
      </TopSection>
      <Divider className="my-2" />
      <BottomSection
        title="บริษัท บริหารสินทรัพย์ กรุงเทพพาณิชย์ จำกัด (มหาชน)"
        des="ผู้ว่าจ้าง"
        date="13/01/2021"
      />
    </CardListItemContainer>
  )
}

export default CardCaseReportAndService
