import { ButtonText, Column } from "objects"
import { Link } from "react-router-dom"

export const Buttons = () => {
  return( 
    <Column>
    <Link to='/skills'>
      <ButtonText text="habilidades" variant="skills"/>
    </Link>
      <ButtonText text="projetos" variant="project"/>
      <ButtonText text="sobre mim" variant="aboutme"/>
    </Column>
  )
}