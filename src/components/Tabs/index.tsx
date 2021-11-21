import { Tabs as TabsAntd } from 'antd'

import styled from 'styled-components'

const Tabs = styled(TabsAntd)`
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 10px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #333333;
  }
  .ant-tabs-tab {
    color: #999999;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 2px solid #333333 !important;
    z-index: 2;
  }
  .ant-tabs-ink-bar {
    height: 5px;
    background: #333333 !important;
  }
`

export { Tabs }
