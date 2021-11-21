import CardUploadDocument from './Card/CardUploadDocument'

const List = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3">
      {[0, 0, 0, 0, 0, 0, 0].map((item) => (
        <CardUploadDocument />
      ))}
    </div>
  )
}

export default List
