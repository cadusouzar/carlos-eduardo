
type PropsLabel ={
  text: string
  size: string
  padding?: string
}

export const Label:React.FC<PropsLabel> = ({text, size, padding}) => {
  return(
    <p className={`text-font-primary font-montserrat ${size} ${padding} cursor-default`}>{text}</p>
  )
}