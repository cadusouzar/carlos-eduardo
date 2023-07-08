import { CardsProject, NavTop } from "components"
import { ButtonText, LinkTo } from "objects"
import { ProjectsData } from "data"

export const Projects = () => {
  return(
    <>
      <NavTop variantIcon="mylogo" textLabel="Projetos"/>
      <div className="lg:-mt-8 3xl:mt-3">
        <CardsProject items={ProjectsData}/>
      </div>
      <div className="flex justify-center mb-4 mt-32 space-x-1 lg:space-x-20 lg:mb-8">
        <LinkTo to='/aboutme'>
          <ButtonText variant="aboutme" text="Sobre mim"/>
        </LinkTo>
        <LinkTo to='/skills'>
          <ButtonText variant="project" text="Habilidades"/>
        </LinkTo>
      </div>
    </>
  )
}