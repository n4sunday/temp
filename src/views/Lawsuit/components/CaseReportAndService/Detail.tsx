import { Form } from 'antd'
import React, { useState } from 'react'

import CardContainer from './Container/CardContainer'
import FormGeneral from './Form/FormGeneral'
import LitigationList from './Tabs/LitigationList'
import BranchCase from './Tabs/BranchCase'
import Status from './Tabs/Status'
import Document from './Tabs/Document'

export enum SELECT_TAB {
  GENERAL = 'general',
  PARTHY_LIST = 'parthy_list',
  BRANCH_CASE = 'branch_case',
  STATUS = 'status',
  DOCUMENT = 'document',
}

const Detail = () => {
  const [selectTab, setSelectTab] = useState<SELECT_TAB>(SELECT_TAB.GENERAL)

  const onSelectTab = (data: SELECT_TAB) => {
    setSelectTab(data)
  }

  return (
    <CardContainer data="TXP7741682IN" date="13/01/2021" onSelectTab={onSelectTab}>
      <div className="px-3">
        {selectTab === SELECT_TAB.GENERAL && (
          <Form layout="vertical">
            <FormGeneral />
          </Form>
        )}
        {selectTab === SELECT_TAB.PARTHY_LIST && <LitigationList />}
        {selectTab === SELECT_TAB.BRANCH_CASE && <BranchCase />}
        {selectTab === SELECT_TAB.STATUS && <Status />}
        {selectTab === SELECT_TAB.DOCUMENT && <Document />}
      </div>
    </CardContainer>
  )
}

export default Detail
