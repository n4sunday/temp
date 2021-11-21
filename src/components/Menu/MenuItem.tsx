import { Link } from 'react-router-dom'

interface PropsType {
  children?: React.ReactNode
  name?: string
  active?: boolean
  link?: string
}

const MenuItem = ({ name, active, children, link = '/' }: PropsType) => {
  return (
    <Link to={link}>
      <div
        className={`${
          active ? 'bg-[#E6E6E6] text-[#4D4D4D]' : 'text-[#808080]'
        } px-8 py-2 rounded-xl select-none cursor-pointer flex items-center`}
      >
        <span className="mr-2 text-xl">{children}</span>
        {name}
      </div>
    </Link>
  )
}

export default MenuItem
