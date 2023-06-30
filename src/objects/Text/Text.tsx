import Typist from 'react-typist'

type TextProps = {
  text: string
  size: string
}

export const Text: React.FC<TextProps> = ({ text, size}) => {
  return (
    <Typist cursor={{blink: false, show: false, hideWhenDone: false}}>
      <p className={`text-font-primary ${size} font-montserrat`}>{text}</p>
    </Typist>
  )
}
