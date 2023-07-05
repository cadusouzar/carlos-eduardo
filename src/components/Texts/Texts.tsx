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
    <div className="flex flex-col items-center relative h-36 2xl:top-11 lg:top-14">
      <Text text="<Hello World!/>" size="2xl:text-large lg:text-medium-small"/>
      {segundoTexto && <Text text="eu sou Carlos Eduardo" size="2xl:text-extra-large lg:text-medium"/>}
      {terceiroTexto && <Text text="desenvolvedor full-stack e de interfaces para o usuário" size="2xl:text-large lg:text-medium-small"/>}
    </div>
  )
}