import { Icon, Row } from "objects"

type PropsButtonText = {
  text?: string
  variant: string
}


export const ButtonText: React.FC<PropsButtonText> = ({text, variant}) => {

  return(
      <button className="2xl:text-medium lg:text-small text-font-primary font-montserrat">
        <Row marginTop="2xl:mt-14 lg:mt-11">
          <Icon width="lg:w-16 lg:h-16 2xl:w-20 2xl:h-20" variant={variant}/> {text}
        </Row>
      </button>
  )
}