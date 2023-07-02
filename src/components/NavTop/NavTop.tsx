import { Icon, Label } from "objects"
import { Link } from "react-router-dom"

type PropsNavTop = {
  variantIcon: string
  textLabel: string
}

export const NavTop:React.FC<PropsNavTop> = ({variantIcon, textLabel}) => {
  return(
    <div className="flex justify-center items-center mt-7">
    <Link to='/'>
      <div className="cursor-pointer">
        <Icon variant={variantIcon}/>
      </div>
    </Link>
    <Label text={textLabel} size="text-extra-large"/>
  </div>
  )
}