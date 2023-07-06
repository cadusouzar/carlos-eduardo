import { Icon, Row } from "objects"

type PropsButtonText = {
  text?: string
  variant: string
}


export const ButtonText: React.FC<PropsButtonText> = ({text, variant}) => {

  return(
      <button className="text-more-small md:text-more-small lg:text-small biglg:text-medium-small xl:text-medium-small 3xl:text-medium text-font-primary font-montserrat">
        <Row marginTop="md:mt-10 lg:mt-6 xl:mt-11 3xl:mt-14">
          <Icon width="mr-1 w-14 md:mr-6 md:w-16 md:h-16 lg:w-16 lg:h-16 biglg:w-18 biglg:h-18 xl:w-16 xl:h-16 bigxl:w-20 bigxl:h-20 3xl:w-20 3xl:h-20" variant={variant}/> {text}
        </Row>
      </button>
  )
}