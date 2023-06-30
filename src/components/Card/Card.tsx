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
          <div className='Content mt-2 w-full'>
            {variantsTitulo.map((variantItemTitulo: string) => (
              <Icon key={variantItemTitulo} variant={variantItemTitulo} />
            ))}
            <Label text={tituloCard} size='text-medium-small' padding='p-7'/>
            <div className='h-28'>
              <Text text={text} size={size} />
            </div>
            <motion.div
              ref={divRef}
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className='flex flex-wrap justify-center space-y-7 mt-10'
            >
              <Label text={tituloLinguagens} size="text-small"/>
              {variantsLinguagem.map((variantItemLinguagem: string) => (
                <Icon key={variantItemLinguagem} variant={variantItemLinguagem} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
