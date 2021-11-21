interface PropsType {
  children?: React.ReactNode
  className?: string
}

const MainContainer = (props: PropsType) => {
  return (
    <div className={`flex justify-center z-10 ${props?.className ? props?.className : ''}`}>
      <div className="w-[95%] xl:w-[1350px]">{props?.children}</div>
    </div>
  )
}

export default MainContainer
