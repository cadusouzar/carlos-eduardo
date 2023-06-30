interface Props{
  children: React.ReactNode
}

export const Row: React.FC<Props> = ({children}) => {
  return <div className="flex flex-row items-center mt-14">{children}</div>
}