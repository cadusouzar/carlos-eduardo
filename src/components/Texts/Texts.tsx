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
    <div className="text-center relative h-36 lg:top-10 xl:top-14 3xl:top-11">
      <Text text="<Hello World!/>" size="lg:text-medium-small xl:text-medium-small 3xl:text-large"/>
      {segundoTexto && <Text text="eu sou Carlos Eduardo" size="lg:text-medium xl:text-medium 3xl:text-extra-large"/>}
      {terceiroTexto && <Text text="desenvolvedor full-stack e de interfaces para o usuário" size="lg:text-medium-small xl:text-medium-small 3xl:text-large"/>}
    </div>
  )
}