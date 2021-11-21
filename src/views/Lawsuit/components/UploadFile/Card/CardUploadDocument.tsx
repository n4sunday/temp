import { Divider as DividerAntd } from 'antd'
import styled from 'styled-components'
import CardListItemContainer, {
  BottomSection,
  TopSection,
} from '../../Common/Card/CardListItemContainer'

const Divider = styled(DividerAntd)`
  margin: 12px 0;
`

const CardUploadDocument = () => {
  return (
    <CardListItemContainer>
      <TopSection header="ข้อมูลคดี 2564/03.xls">
        <div className="flex justify-between">
          <div>ขนาดไฟล์ 12 KB</div>
          <div className="text-[#FF7F00] font-semibold">กำลังดำเนินการ</div>
        </div>
      </TopSection>
      <Divider className="my-2" />
      <BottomSection title="นายกิตติโชค มาดี" des="ผู้อัพโหลด" date="13/01/2021" />
    </CardListItemContainer>
  )
}

export default CardUploadDocument
