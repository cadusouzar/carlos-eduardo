import { Card } from "components"
import { ButtonText, Icon, Label} from "objects"
import { Link } from "react-router-dom"


export const Skills = () => {
  return(
    <>
      <div className="flex justify-center items-center mt-7">
        <Link to='/'>
          <div className="cursor-pointer">
            <Icon variant="react"/>
          </div>
        </Link>
        <Label text="habilidades" size="text-extra-large"/>
      </div>
      <div className="flex justify-center mt-4">
          <Card variantsTitulo={['designer']} text='eu valorizo ​​uma estrutura de conteúdo simples, padrões de design limpos e interações inteligentes.' tituloCard="design" tituloLinguagens="ferramentas de Projeto:" variantsLinguagem={['figma','google sites']} size='text-very-small'/>
          <Card variantsTitulo={['frontend']} text='desenvolver sites e interfaces é minha paixão, amo desenvolver coisas do zero e dar vida às ideias.' tituloCard="front-end e frameworks" tituloLinguagens="linguagens conhecidas:" variantsLinguagem={['html','css','react','typescript','angular','vuejs','tailwind','bootstrap']} size='text-very-small'/>
          <Card variantsTitulo={['backend']} text='meu nível de código não é tão alto, porém consigo ter autonomia para desenvolver, buscando sempre aprender.' tituloCard="back-end, banco de dados e versionamento" tituloLinguagens="linguagens conhecidas:" variantsLinguagem={['csharp','nodejs','javascript','nestjs','sql','oracle','git']} size="text-very-small"/>
      </div>
      <div className="flex justify-center space-x-20 -mt-10">
        <ButtonText variant="aboutme" text="sobre mim"/>
        <ButtonText variant="project" text="projetos"/>
      </div>
    </>
  )
}