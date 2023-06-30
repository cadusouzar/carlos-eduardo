import { Icon, Row } from "objects"

type PropsButtonText = {
  text: string
  variant: string
}


export const ButtonText: React.FC<PropsButtonText> = ({text, variant}) => {
  return(
      <button className="text-small text-font-primary font-montserrat">
        <Row>
          <Icon variant={variant}/> {text}
        </Row>
      </button>
  )
}