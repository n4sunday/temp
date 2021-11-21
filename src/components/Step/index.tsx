import { Steps as StepsAntd } from 'antd'
import styled from 'styled-components'

const Steps = styled(StepsAntd)`
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #ff7f00;
  }

  .ant-steps-item-process .ant-steps-item-icon {
    border-color: #ff7f00;
  }

  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: #ff7f00;
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #ff7f00;
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: #ff7f00;
  }
`

export default Steps
