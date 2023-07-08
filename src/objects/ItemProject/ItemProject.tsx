import { AnimationButton , Icon, Image } from "objects"
import './styles.css'
import { useEffect, useRef, useState } from "react";
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
  classImage: string
  marginText: string
}

export const ItemProject:React.FC<PropsItemProject> = ({titulo, text, linguagensObject, variantImage, animationObject, classImage, marginText}) => {
  const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  const options = {
    scale: 1.2,
    speed: 500,
    max: 20,
  };

  useEffect(() => {
    function handleResize() {
      setTamanhoTela(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <>
      {
      tamanhoTela <= 1400?
      <Tilt options={options}>
        <div className='flex justify-center md:mt-28 md:mr-20 lg:mr-20 lg:mt-28'>
          <Image variant={variantImage} classImage="md:ml-20 md:w-image-768 lg:w-image-1080"/>
        </div>
      </Tilt>
      : ""}
      <div className={`text-center space-y-4 mt-10 -mb-28 md:text-center md:space-y-6 md:w-full lg:flex lg:flex-col lg:space-y-6 biglg:mr-20 biglg:w-1/2 biglg:space-y-8 biglg:text-start biglg:mt-12 biglg:mb-0 xl:flex xl:flex-col xl:space-y-6 3xl:mr-20 3xl:w-1/3 3xl:space-y-8 3xl:text-start ${marginText} cursor-default`}>
        <div className="space-y-3 md:space-x-2 md:space-y-4 lg:space-y-4 biglg:space-x-0 xl:space-y-4 3xl:space-y-8 3xl:space-x-0">
          <h1 className="text-more-small md:text-small lg:text-small xl:text-medium-small 3xl:text-medium font-montserrat text-font-primary">{titulo}</h1>
          <p className="font-montserrat text-font-primary  mr-8 ml-8 text-real-small md:text-more-small lg:mr-0 lg:ml-0 lg:text-more-small biglg:text-more-small 3xl:text-more-small">{text}</p>
        </div>
        <div className="flex justify-center space-x-2 md:flex md:justify-center md:space-x-2 lg:flex lg:justify-center lg:space-x-2 biglg:justify-start 3xl:justify-start text-more-small font-montserrat text-font-primary items-center">
          {linguagensObject.map((linguagem, index) => (
            <>
              <Icon key={linguagem.iconLinguagens} variant={linguagem.iconLinguagens} marginRight="md:mr-1 xl:mr-1" width="w-6 md:w-7 lg:w-8 xl:w-9"/>
              <p className="text-more-small" key={linguagem.linguagens}>{linguagem.linguagens}</p>
            </>
          ))}
        </div>
        <div className="space-x-6">
          {animationObject.map((animation) => (
            <AnimationButton key={animation.variantAnimation} variant={animation.variantAnimation} link={animation.linkAnimation} className="w-10 mb-6 md:mb-5 md:w-12 lg:w-14 xl:w-16"/>
          ))}
        </div>
      </div>
      {
      tamanhoTela > 1400 ?       
      <Tilt options={options}>
        <div className='biglg:mr-10 biglg:ml-12'>
          <Image variant={variantImage} classImage="md:ml-20 md:w-image-768 lg:w-image-1024 biglg:w-image-1080 biglg:ml-0 3xl:w-image-1080 3xl:ml-0"/>
        </div>
      </Tilt>
      : ""}
    </>
  )
}

