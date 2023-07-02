import { Card, NavTop } from "components"
import { ButtonText} from "objects"


export const Skills = () => {
  return(
    <>
      <NavTop variantIcon="react" textLabel="Habilidades"/>
      <div className="flex justify-center mt-4">
          <Card variantsTitulo={['designer']} text='Eu valorizo ​​uma estrutura de conteúdo simples, padrões de design limpos e interações inteligentes.' tituloCard="Design" tituloLinguagens="Ferramentas de Projeto:" variantsLinguagem={['figma','google sites']} size='text-very-small'/>
          <Card variantsTitulo={['frontend']} text='Desenvolver sites e interfaces é minha paixão, amo desenvolver coisas do zero e dar vida às ideias.' tituloCard="Front-end e frameworks" tituloLinguagens="Linguagens conhecidas:" variantsLinguagem={['html','css','react','typescript','angular','vuejs','tailwind','bootstrap']} size='text-very-small'/>
          <Card variantsTitulo={['backend']} text='Meu nível de código não é tão alto, porém consigo ter autonomia para desenvolver, buscando sempre aprender.' tituloCard="Back-end, Banco de Dados e Versionamento" tituloLinguagens="Linguagens conhecidas:" variantsLinguagem={['csharp','nodejs','javascript','nestjs','sql','oracle','git']} size="text-very-small"/>
      </div>
      <div className="flex justify-center space-x-20 -mt-10">
        <ButtonText variant="aboutme" text="Sobre mim"/>
        <ButtonText variant="project" text="Projetos"/>
      </div>
    </>
  )
}