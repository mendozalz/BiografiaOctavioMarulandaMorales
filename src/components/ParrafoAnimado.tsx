import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
  children?: string;
  progreso?: MotionValue<number> | any;
  rango?: [number, number] | any;
  parrafo?: string;
  palabras?: string;
}

const ParrafoAnimado: React.FC<Props> = ({ parrafo }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start 0.25"],
  });
  const palabras = parrafo!.split(" ");

  return (
    <p ref={container} className="parrafosAnimados">
      {palabras.map((palabra, i) => {
        const start = i / palabras.length; // Cambio aquí
        const end = start + (1 / palabras.length); // Cambio aquí
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