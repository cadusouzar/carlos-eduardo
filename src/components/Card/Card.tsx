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
          <div className='Content 3xl:mt-2 w-full'>
            {variantsTitulo.map((variantItemTitulo: string) => (
              <Icon key={variantItemTitulo} variant={variantItemTitulo} width='xl:w-16 3xl:w-20'/>
            ))}
            <Label text={tituloCard} size='3xl:text-medium-small xl:text-small' padding='3xl:p-7 xl:p-4'/>
            <div className='h-28 xl:mt-2 '>
              <Text text={text} size={size}/>
            </div>
            <motion.div
              ref={divRef}
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className='flex flex-wrap justify-center space-y-7 3xl:mt-10 xl:mt-4'
            >
              <Label text={tituloLinguagens} size="3xl:text-small xl:text-small"/>
              {variantsLinguagem.map((variantItemLinguagem: string) => (
                <Icon key={variantItemLinguagem} variant={variantItemLinguagem} width='xl:w-14 3xl:w-20'/>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
