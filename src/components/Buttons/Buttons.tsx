import { ButtonText, Column } from "objects"
import { Link } from "react-router-dom"

export const Buttons = () => {
  return( 
    <Column>
    <Link to='/skills'>
      <ButtonText text="Habilidades" variant="skills"/>
    </Link>

      <ButtonText text="Projetos" variant="project"/>

    <Link to='/aboutme'>
      <ButtonText text="Sobre mim" variant="aboutme"/>
    </Link>
    </Column>
  )
}