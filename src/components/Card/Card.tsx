import { Icon, Label, Text } from 'objects';
import VanillaTilt from 'vanilla-tilt';
import './styles.css';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

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

type PropsCard = {
  variantsTitulo?: any;
  variantsLinguagem?: any;
  text: string;
  size: string;
  tituloCard: string;
  tituloLinguagens: string;
};

export const Card: React.FC<PropsCard> = ({ variantsTitulo, variantsLinguagem, text, size, tituloCard, tituloLinguagens }) => {
  const options = {
    scale: 1,
    speed: 500,
    max: 20,
  };

  const divRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ y: -10, opacity: 1 });
    }, 4825);

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <Tilt options={options}>
      <div className='Container'>
        <div className='Card'>
          <div className='Content mt-3 md:mt-2 lg:mt-0 3xl:mt-2 w-full'>
            {variantsTitulo.map((variantItemTitulo: string) => (
              <Icon key={variantItemTitulo} variant={variantItemTitulo} width='w-16 ml-6 md:ml-5 md:w-12 lg:w-14 xl:w-16 3xl:w-20 3xl:ml-6'/>
            ))}
            <Label text={tituloCard} size='text-medium md:text-more-small lg:text-small xl:text-small 3xl:text-medium-small' padding='p-5 md:p-3 lg:p-0 xl:p-4 3xl:p-7'/>
            <div className='h-28 md:p-2 lg:w-72 lg:mt-3 biglg:w-full xl:mt-2 3xl:p-0 3xl:mt-0 3xl:w-full'>
              <Text text={text} size={size}/>
            </div>
            <motion.div
              ref={divRef}
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className='flex flex-wrap justify-center space-y-7 w-96 ml-1 mt-20 md:w-56 md:mt-4 md:space-y-3 lg:w-72 lg:mt-12 xl:mt-4 biglg:w-full 3xl:mt-10 3xl:w-full'
            >
              <Label text={tituloLinguagens} size="text-small md:text-real-small lg:text-more-small xl:text-small 3xl:text-small"/>
              {variantsLinguagem.map((variantItemLinguagem: string) => (
                <Icon key={variantItemLinguagem} variant={variantItemLinguagem} marginLeft='md:ml-2' width='w-14 md:w-10 lg:w-10 xl:w-14 3xl:w-20'/>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
