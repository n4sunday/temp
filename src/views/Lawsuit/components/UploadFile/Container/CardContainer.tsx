import { Space } from 'antd'
import ControlForm from 'components/Control/ControlForm'

import { Tabs } from 'components/Tabs'
import { SELECT_TAB } from '../Detail'

const { TabPane } = Tabs

interface PropsType {
  children?: React.ReactNode
  data?: string
  date?: string
  onSelectTab: (data: SELECT_TAB) => void
}

const CardContainer = ({ data, date, children, onSelectTab }: PropsType) => {
  const onChangeTab = (key: SELECT_TAB | string) => {
    onSelectTab(key as SELECT_TAB)
  }

  return (
    <div className="border border-[#CCCCCC] bg-white rounded-lg">
      <Tabs
        defaultActiveKey={SELECT_TAB.PARTHY_LIST}
        onChange={onChangeTab}
        tabBarExtraContent={
          <Space className="text-[#999999] px-6">
            <span className="font-semibold">{data}</span>
            <span>{date}</span>
          </Space>
        }
      >
        <TabPane tab={<div className="px-4">รายการคู่ความ</div>} key={SELECT_TAB.PARTHY_LIST}>
          <div className="px-3">{children}</div>
        </TabPane>
        <TabPane
          tab={<div className="px-4">รายงานคดีเเละงานบริการ</div>}
          key={SELECT_TAB.CASE_REPORT_AND_SERVICE}
        >
          <div className="px-3">{children}</div>
        </TabPane>
      </Tabs>
      <ControlForm />
    </div>
  )
}

export default CardContainer
