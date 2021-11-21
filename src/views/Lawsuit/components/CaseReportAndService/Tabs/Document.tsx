import { Form } from 'antd'
import styled from 'styled-components'
import { ButtonGray, ButtonGrayRounded } from 'components/Button'
import useStatus from 'views/Lawsuit/hooks/caseReportAndSerivce/useStatus'
import InputRounded from 'components/Form/InputRounded'
import { Label } from 'components/Form'
import DocumentTable from '../Table/DocumentTable'

const FormItem = styled(Form.Item)`
  margin-bottom: 0;
`

const Document = () => {
  const {} = useStatus()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-2">
        <div className="text-[#4D4D4D] mb-2">การค้นหา</div>
        <Form layout="vertical">
          <div className="bg-[#F4F4F4] rounded-xl border border-[#E6E6E6] grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-6 py-3">
            <FormItem label={<Label>ค้นหาเอกสาร</Label>}>
              <InputRounded placeholder="ชื่อเอกสาร" />
            </FormItem>
            <div className="flex items-end mt-4 lg:mt-0">
              <ButtonGrayRounded className="w-full lg:w-min">ล้างการค้นหา</ButtonGrayRounded>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <div className="flex justify-between items-center my-4">
          <div className="text-[#4D4D4D] font-semibold">รายการเอกสาร</div>
          <ButtonGray>อัพโหลดเอกสาร</ButtonGray>
        </div>
        <DocumentTable />
      </div>
    </div>
  )
}

export default Document
