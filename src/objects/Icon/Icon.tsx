import { useEffect, useState } from "react"

type IconProps = {
  variant: string
  width?: string
  height?: string
  marginLeft?: string
}

export const Icon: React.FC<IconProps> = ({variant, width = '80px', height = '80px', marginLeft}) => {
  const [iconSrc, setIconSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`../../../public/icones/${variant}.png`)
      setIconSrc(result.default)
    }

    mount()
  }, [variant])

  return <img className={`mr-6 ${marginLeft}`} src={iconSrc} width={width} height={height} alt={variant}/> 
}