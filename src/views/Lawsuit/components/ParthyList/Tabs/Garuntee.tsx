import { PlusOutlined } from '@ant-design/icons'
import { Form } from 'antd'

import { ButtonBlackOutline, ButtonGrayRounded } from 'components/Button'
import { Label } from 'components/Form'
import InputRounded from 'components/Form/InputRounded'
import styled from 'styled-components'
import useGaruntee from 'views/Lawsuit/hooks/parthy/useGaruntee'
import GarunteeTable from '../Table/GarunteeTable'

const FormItem = styled(Form.Item)`
  margin-bottom: 0;
`

const Garuntee = () => {
  const { onAddGaruntee } = useGaruntee()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-2">
        <div className="text-[#4D4D4D] mb-2">การค้นหา</div>
        <Form layout="vertical">
          <div className="bg-[#F4F4F4] rounded-xl border border-[#E6E6E6] grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-6 py-3">
            <FormItem label={<Label>ประเภททรัพย์</Label>}>
              <InputRounded placeholder="เช่น อสังหาริมทรัพย์" />
            </FormItem>
            <FormItem label={<Label>แหล่งที่มาของทรัพย์</Label>}>
              <InputRounded placeholder="เช่น อสังหาริมทรัพย์" />
            </FormItem>
            <div className="flex items-end mt-4 lg:mt-0">
              <ButtonGrayRounded className="w-full lg:w-min">ล้างการค้นหา</ButtonGrayRounded>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <div className="flex justify-between items-center my-4">
          <div className="text-[#4D4D4D] font-semibold">รายการทรัพย์</div>
          <ButtonBlackOutline icon={<PlusOutlined />} onClick={onAddGaruntee}>
            รายการทรัพย์
          </ButtonBlackOutline>
        </div>
        <GarunteeTable />
      </div>
    </div>
  )
}

export default Garuntee
