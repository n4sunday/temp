import { Form } from 'antd'
import { useState } from 'react'

import CardContainer from './Container/CardContainer'
import FormParthy from './Tabs/FormParthy'
import Garuntee from './Tabs/Garuntee'

export enum SELECT_TAB {
  PARTHY = 'parthy',
  GARUNTEE_LIST = 'garuntee_list',
}

const Detail = () => {
  const [selectTab, setSelectTab] = useState<SELECT_TAB>(SELECT_TAB.PARTHY)

  const onSelectTab = (data: SELECT_TAB) => {
    setSelectTab(data)
  }

  return (
    <CardContainer data="TXP7741682IN" date="13/01/2021" onSelectTab={onSelectTab}>
      <div className="px-3">
        {selectTab === SELECT_TAB.PARTHY && (
          <Form layout="vertical">
            <FormParthy />
          </Form>
        )}
        {selectTab === SELECT_TAB.GARUNTEE_LIST && <Garuntee />}
      </div>
    </CardContainer>
  )
}

export default Detail
