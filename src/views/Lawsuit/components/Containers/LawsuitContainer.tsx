import HeaderLawsuit from '../Common/Headers/HeaderLawsuit'

interface PropsType {
  search?: React.ReactNode
  list?: React.ReactNode
  children?: React.ReactNode
}

const LawsuitContainer = ({ search, list, children }: PropsType) => {
  return (
    <div className="flex flex-col pt-4 z-10">
      <HeaderLawsuit />
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-4">
          {search}
          <div className="overflow-y-auto pb-4">{list}</div>
        </div>
        <div className="col-span-8 pb-4">{children}</div>
      </div>
    </div>
  )
}

export default LawsuitContainer
