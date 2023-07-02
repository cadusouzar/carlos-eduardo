import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

type AnimationProps = {
  variant: string
  width: string
  height: string
  transform?: string
  marginLeft?: string
  top?: string
  position?: any
  cursor?: string
  link?: string
}

export const Animation: React.FC<AnimationProps> = ({variant, width, height, transform, marginLeft, top, position, cursor = 'pointer', link}) => {
  const [animationSrc, setAnimationSrc] = useState()
  const goToPage = () => {
    window.open(`${link}`, '_blank');
  }

  useEffect(() => {
    const mount = async () => {
      const result = await import (`./${variant}.json`)
      setAnimationSrc(result.default)
    }

    mount()
  }, [variant])

  return (
    <button onClick={() => goToPage()}>
      <Lottie animationData={animationSrc} alt={variant} loop={true} autoplay={true} style={{width:width, height:height, transform: transform, marginLeft: marginLeft, top: top, position: position, cursor: cursor}}/>
    </button>
  )

} 