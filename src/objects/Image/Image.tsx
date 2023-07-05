import { useEffect, useState } from "react"

type IconProps = {
  variant: string
  width: string
  height: string
}

export const Image: React.FC<IconProps> = ({variant, width, height }) => {
  const [imageSrc, setImageSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`../../data/images/${variant}.png`)
      setImageSrc(result.default)
    }

    mount()
  }, [variant])

  return <img style={{borderRadius: '20px'}} src={imageSrc} width={width} height={height} alt={variant}/> 
}