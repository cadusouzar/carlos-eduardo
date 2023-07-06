interface Props{
  children: React.ReactNode
}

export const Column: React.FC<Props> = ({children}) => {
  return(
    <div className="flex flex-col space-y-8 mt-10 mb-10 md:mt-0 md:space-y-0">{children}</div>
  )
}