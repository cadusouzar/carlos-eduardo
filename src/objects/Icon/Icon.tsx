import { useEffect, useState } from "react"

type IconProps = {
  variant: string
  width?: string
  height?: string
  marginRight?: string
  marginLeft?: string
}

export const Icon: React.FC<IconProps> = ({variant, marginLeft, marginRight = 'mr-6', width, height}) => {
  const [iconSrc, setIconSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`../../data/icones/${variant}.png`)
      setIconSrc(result.default)
    }

    mount()
  }, [variant])

  return <img className={`${marginLeft} ${marginRight} ${width} ${height}`} src={iconSrc} alt={variant}/> 
}