import { ButtonText, Column } from "objects"

export const Buttons = () => {
  return( 
    <Column>
      <ButtonText text="Sobre mim" variant="aboutme"/>
      <ButtonText text="Projetos" variant="project"/>
      <ButtonText text="Habilidades" variant="skills"/>
    </Column>
  )
}