import { Card, NavTop } from "components"
import { ButtonText, LinkTo} from "objects"

export const Skills = () => {
  return(
    <>
      <NavTop variantIcon="react" textLabel="Habilidades"/>
      <div className="flex flex-col justify-center md:flex-row mt-20 md:flex 3xl:mt-4">
          <Card variantsTitulo={['designer']} text='Eu valorizo ​​uma estrutura de conteúdo simples, padrões de design limpos e interações inteligentes.' tituloCard="Design" tituloLinguagens="Ferramentas de Projeto:" variantsLinguagem={['figma','google sites']} size='text-small md:text-real-small lg:text-more-small xl:text-more-small 3xl:text-very-small'/>
          <Card variantsTitulo={['frontend']} text='Desenvolver sites e interfaces é minha paixão, amo desenvolver coisas do zero e dar vida às ideias.' tituloCard="Front-end e frameworks" tituloLinguagens="Linguagens conhecidas:" variantsLinguagem={['html','css','react','typescript','angular','vuejs','tailwind','bootstrap']} size='text-small md:text-real-small lg:text-more-small xl:text-more-small 3xl:text-very-small'/>
          <Card variantsTitulo={['backend']} text='Meu nível de código não é tão alto, porém consigo ter autonomia para desenvolver, buscando sempre aprender.' tituloCard="Back-end, Banco de Dados e Versionamento" tituloLinguagens="Linguagens conhecidas:" variantsLinguagem={['csharp','nodejs','javascript','nestjs','sql','oracle','git']} size='text-small md:text-real-small lg:text-more-small xl:text-more-small 3xl:text-very-small'/>
      </div>
      <div className="flex justify-center mb-4 mt-6 space-x-4 lg:space-x-20 lg:mb-8 biglg:-mt-10 3xl:-mt-12">
        <LinkTo to='/aboutme'>
          <ButtonText variant="aboutme" text="Sobre mim"/>
        </LinkTo>
        <LinkTo to='/projects'>
          <ButtonText variant="project" text="Projetos"/>
        </LinkTo>
      </div>
    </>
  )
}