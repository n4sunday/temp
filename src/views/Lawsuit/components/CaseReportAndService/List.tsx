import CardCaseReportAndService from './Card/CardCaseReportAndService'

const List = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3">
      {[0, 0, 0, 0, 0, 0, 0].map((item) => (
        <CardCaseReportAndService />
      ))}
    </div>
  )
}

export default List
