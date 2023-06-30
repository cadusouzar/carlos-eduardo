import { useEffect, useState } from "react"

type IconProps = {
  variant: string
}

export const Icon: React.FC<IconProps> = ({variant}) => {
  const [iconSrc, setIconSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`../../../public/icones/${variant}.png`)
      setIconSrc(result.default)
    }

    mount()
  }, [variant])

  return <img className="mr-6" src={iconSrc} width="80px" height="80px" alt={variant}/> 
}