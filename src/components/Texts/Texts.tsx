import { Text } from "objects";
import { useEffect, useState } from "react";

export const Texts = () => {
  const[segundoTexto, setSegundoTexto] = useState(false)
  const[terceiroTexto, setTerceiroTexto] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSegundoTexto(true)
    }, 1500);
  })

  useEffect(() => {
    setTimeout(() => {
      setTerceiroTexto(true)
    }, 1500 * 2);
  })
  return(
    <div className="text-center ml-5 mr-5 relative h-36 top-12 space-y-2 md:ml-0 md:mr-0 md:top-4 lg:top-10 xl:top-14 3xl:top-11">
      <Text text="<Hello World!/>" size="text-very-small md:text-medium-small lg:text-medium-small xl:text-medium-small 3xl:text-large"/>
      {segundoTexto && <Text text="eu sou Carlos Eduardo" size="text-small md:text-medium lg:text-medium xl:text-medium 3xl:text-extra-large"/>}
      {terceiroTexto && <Text text="desenvolvedor full-stack e UI/UX" size="text-very-small md:text-medium-small lg:text-medium-small xl:text-medium-small 3xl:text-large"/>}
    </div>
  )
}