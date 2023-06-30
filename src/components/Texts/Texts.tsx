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
    <div className="flex flex-col items-center relative h-36 top-11">
      <Text text="<Hello World!/>" size="text-large"/>
      {segundoTexto && <Text text="eu sou Carlos Eduardo" size="text-extra-large"/>}
      {terceiroTexto && <Text text="desenvolvedor full-stack e de interfaces para o usuário" size="text-large"/>}
    </div>
  )
}