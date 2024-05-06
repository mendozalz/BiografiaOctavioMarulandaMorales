import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='w-screen h-screen grid place-items-center absolute'>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: .5, ease: [0, 0.71, 0.2, 1.01] }}
          className='text-[20px] text-black text-center p-4'
        >
          <p>Octavio Marulanda Morales, Colombiano nacido el 7 de Ocutbre en Manizales, en el barrio Mayo frío.</p>
        </motion.div>
      )}

      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className='fixed inset-0 bg-black grid place-items-center lg:text-[20px] text-center text-white z-50 p-4'
        >
          <p>Octavio Marulanda Morales, Colombiano nacido el 7 de Ocutbre en Manizales, en el barrio Mayo frío.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Intro;