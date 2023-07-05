interface Props{
  children: React.ReactNode,
  marginTop?: string
}

export const Row: React.FC<Props> = ({children, marginTop}) => {
  return <div className={`flex flex-row items-center ${marginTop}`}>{children}</div>
}