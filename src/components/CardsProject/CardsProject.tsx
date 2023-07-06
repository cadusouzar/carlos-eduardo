import { ContainerGrid, ItemProject } from "objects"

type PropsCardsProject = {
  items: {
    titulo: string
    text: string
    linguagensObject:{
      iconLinguagens: string
      linguagens: string
    }[]
    variantImage: string
    animationObject:{
      variantAnimation: string
      linkAnimation: string
    }[]
  }[]
}

export const CardsProject:React.FC<PropsCardsProject> = ({items}) => {
  return(
    <>
      {items.map((item, index) => (
        <ContainerGrid key={index} flexColumn={index % 2 !== 0 ? "flex-row-reverse" : ""}>
          <ItemProject 
          key={item.titulo}
          titulo={item.titulo} 
          text={item.text} 
          linguagensObject={item.linguagensObject}
          variantImage={item.variantImage} 
          animationObject={item.animationObject}
          marginText={index % 2 !== 0 ? 'xl:ml-12 xl:mr-4 3xl:ml-20' : 'xl:ml-12 xl:mr-4 3xl:mr-20'}
          classImage={index % 2 !== 0 ? 'ContainerImageLeft' : 'ContainerImageRight'}/>
        </ContainerGrid>  
      ))}
    </>
  )
}