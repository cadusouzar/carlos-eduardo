import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

type AnimationProps = {
  variant: string
  transform?: string
  marginLeft?: string
  position?: any
  cursor?: string
  link?: string
  className?: string
}

export const Animation: React.FC<AnimationProps> = ({
  variant,
  transform,
  marginLeft,
  position,
  cursor = 'pointer',
  link,
  className
}) => {
  const [animationSrc, setAnimationSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`./${variant}.json`);
      setAnimationSrc(result.default);
    };

    mount();
  }, [variant]);

  const goToPage = () => {
    window.open(link, '_blank');
  };

  const buttonProps = link ? { onClick: goToPage } : {};

  return (
    <button {...buttonProps}>
      <Lottie
        className={className}
        animationData={animationSrc}
        alt={variant}
        loop={true}
        autoplay={true}
        style={{
          transform: transform,
          marginLeft: marginLeft,
          position: position,
          cursor: cursor,
        }}
      />
    </button>
  );
};






