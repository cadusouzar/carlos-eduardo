interface Props{
  children: React.ReactNode
}

export const Tema: React.FC<Props> = ({children}) => {
  return <div className="bg-primary">{children}</div>
}