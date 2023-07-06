import { ButtonText, Column, LinkTo } from "objects"

export const Buttons = () => {
  return( 
    <Column>
      <LinkTo to='/skills'>
        <ButtonText text="Habilidades" variant="skills"/>
      </LinkTo>
      <LinkTo to='/projects'>
        <ButtonText text="Projetos" variant="project"/>
      </LinkTo>
      <LinkTo to='/aboutme'>
        <ButtonText text="Sobre mim" variant="aboutme"/>
      </LinkTo>
    </Column>
  )
}