import { AnimationButton , Icon, Image } from "objects"
import './styles.css'
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props: any) {
  const { options, ...rest } = props;
  const tilt = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

type PropsItemProject = {
  titulo: string
  text: string
  linguagensObject: {
    iconLinguagens: string
    linguagens: string
  }[]
  variantImage: string
  animationObject:{
    variantAnimation: string
    linkAnimation: string
  }[]
  width: string
  heigth: string
  classImage: string
  marginText: string
}

export const ItemProject:React.FC<PropsItemProject> = ({titulo, text, linguagensObject, variantImage, animationObject, width, heigth, classImage, marginText}) => {
  const options = {
    scale: 1.2,
    speed: 500,
    max: 20,
  };

  return(
    <>
      <div className={`3xl:w-1/3 xl:w-1/2 3xl:space-y-8 xl:space-y-6 ${marginText} cursor-default`}>
        <div className="3xl:space-y-8 xl:space-y-4">
          <h1 className="3xl:text-medium xl:text-medium-small font-montserrat text-font-primary">{titulo}</h1>
          <p className="text-more-small font-montserrat text-font-primary">{text}</p>
        </div>
        <div className="flex text-more-small font-montserrat text-font-primary items-center">
          {linguagensObject.map((linguagem) => (
            <>
              <Icon variant={linguagem.iconLinguagens} marginRight="xl:mr-1" width="xl:w-9"/>
              <p className="mr-6">{linguagem.linguagens}</p>
            </>
          ))}
        </div>
        <div className="space-x-6">
          {animationObject.map((animation) => (
            <AnimationButton variant={animation.variantAnimation} link={animation.linkAnimation} className="xl:w-16"/>
          ))}
        </div>
      </div>
      <Tilt options={options}>
        <div className={`${classImage}`}>
          <Image variant={variantImage} width={width} height={heigth}/>
        </div>
      </Tilt>
    </>
  )
}

