interface PropsType {
  children: React.ReactNode
}

export const Label = ({ children }: PropsType) => {
  return <div className="text-[#999999] text-xs">{children}</div>
}

export default Label
