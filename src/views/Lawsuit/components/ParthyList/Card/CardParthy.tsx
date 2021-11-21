import { Divider as DividerAntd } from 'antd'
import styled from 'styled-components'
import CardListItemContainer, {
  BottomSection,
  TopSection,
} from '../../Common/Card/CardListItemContainer'

const Divider = styled(DividerAntd)`
  margin: 12px 0;
`

const CardParthy = () => {
  return (
    <CardListItemContainer>
      <TopSection header="นางสาวปัทมา อินจันทร์">
        31/1 ต.ป่าตอง อ.กะทู้ จ.ภูเก็ต 83120 | 085 128 5919
      </TopSection>
      <Divider className="my-2" />
      <BottomSection title="CP ALL PUBLIC COMPANY LIMITED" des="นายจ้าง" date="13/01/2021" />
    </CardListItemContainer>
  )
}

export default CardParthy
