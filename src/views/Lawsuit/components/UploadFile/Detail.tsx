import { Divider, Form } from 'antd'
import React, { useState } from 'react'

import CardContainer from './Container/CardContainer'

export enum SELECT_TAB {
  PARTHY_LIST = 'parthy_list',
  CASE_REPORT_AND_SERVICE = 'CaseReportAndService',
}

const Detail = () => {
  const [selectTab, setSelectTab] = useState<SELECT_TAB>(SELECT_TAB.PARTHY_LIST)

  const onSelectTab = (data: SELECT_TAB) => {
    setSelectTab(data)
  }

  return (
    <CardContainer data="TXP7741682IN" date="13/01/2021" onSelectTab={onSelectTab}>
      <div className="px-3">
        {selectTab === SELECT_TAB.PARTHY_LIST && <div></div>}
        {selectTab === SELECT_TAB.CASE_REPORT_AND_SERVICE && <div></div>}
      </div>
    </CardContainer>
  )
}

export default Detail
