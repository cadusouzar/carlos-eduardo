import { CardsProject, NavTop } from "components"
import { ButtonText } from "objects"
import { ProjectsData } from "data"
import { Link } from "react-router-dom"

export const Projects = () => {
  return(
    <>
      <NavTop variantIcon="react" textLabel="Projetos"/>
      <div>
        <CardsProject items={ProjectsData}/>
      </div>
      <div className="flex justify-center space-x-20 mb-8">
        <Link to='/aboutme'>
          <ButtonText variant="aboutme" text="Sobre mim"/>
        </Link>
        <Link to='/skills'>
          <ButtonText variant="project" text="Habilidades"/>
        </Link>
      </div>
    </>
  )
}