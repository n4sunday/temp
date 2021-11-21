interface PropsType {
  status?: string
}

const GarunteeTypeCodeStatus = ({ status }: PropsType) => {
  switch (status) {
    case 'ติดจำนอง':
      return <div className="text-[#FF8500] font-semibold">ติดจำนอง</div>
    case 'ติดอายัด':
      return <div className="text-[#FF3B61] font-semibold">ติดอายัด</div>
    default:
      return <div>-</div>
  }
}

export default GarunteeTypeCodeStatus
