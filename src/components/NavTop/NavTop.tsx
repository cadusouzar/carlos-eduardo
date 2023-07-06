import { Icon, Label } from "objects"
import { Link } from "react-router-dom"

type PropsNavTop = {
  variantIcon: string
  textLabel: string
}

export const NavTop:React.FC<PropsNavTop> = ({variantIcon, textLabel}) => {
  return(
    <div className="flex justify-center items-center mt-7 -mb-16 lg:-mb-0">
      <Link to='/'>
        <div className="cursor-pointer">
          <Icon variant={variantIcon} width="w-14 md:w-12 lg:w-14 xl:w-20"/>
        </div>
      </Link>
      <Label text={textLabel} size="text-medium md:text-small lg:text-medium-small xl:text-medium 3xl:text-extra-large"/>
    </div>
  )
}