import { useEffect, useState } from "react"

type IconProps = {
  variant: string
  classImage: string
}

export const Image: React.FC<IconProps> = ({variant, classImage }) => {
  const [imageSrc, setImageSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`../../data/images/${variant}.png`)
      setImageSrc(result.default)
    }

    mount()
  }, [variant])

  return <img className={`${classImage}`} style={{borderRadius: '20px'}} src={imageSrc} alt={variant}/> 
}