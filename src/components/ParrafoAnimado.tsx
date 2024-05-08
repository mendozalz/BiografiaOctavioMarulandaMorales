import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
  children?: string;
  progreso?: MotionValue<number> | any;
  rango?: [number, number] | any;
  parrafo?: string;
  palabras?: string;
  textAlign?: string
}

const ParrafoAnimado: React.FC<Props> = ({ parrafo }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.4", "start 0.30"],
  });
  const palabras = parrafo!.split(" ");

  return (
    <p ref={container} className={`parrafosAnimados m-auto`}>
      {palabras.map((palabra, i) => {
        const start = i / palabras.length; 
        const end = start + (1 / palabras.length); 
        return (
          <Palabras key={i} progreso={scrollYProgress} rango={[start, end]}>
            {palabra}
          </Palabras>
        );
      })}
    </p>
  );
};

export default ParrafoAnimado;

const Palabras: React.FC<Props> = ({ children, progreso, rango }) => {
  const opacity = useTransform(progreso, rango, [0, 1]);
  return (
    <span className="palabras">
      <span className="sombra">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};