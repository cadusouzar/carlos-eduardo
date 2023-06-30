interface Props{
  children: React.ReactNode
}

export const Column: React.FC<Props> = ({children}) => {
  return(
    <div className="flex flex-col mb-10">{children}</div>
  )
}