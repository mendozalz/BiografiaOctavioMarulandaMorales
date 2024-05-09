import { motion, useTransform, useScroll, delay } from "framer-motion";
import { stagger } from "framer-motion/dom";

import { useRef } from "react";

const Carousel = () => {
  return (
    <div className="bg-white ">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-[100vw]">
      <div className="sticky top-0 flex h-screen w-screen items-center lg:items-end overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const title1X = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const title2X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const title3X = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  const variante = {
    inicio: { opacity: 0, y: 50 },
    fin: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: .5, staggerChildren:  0.2 },
    },
  };
  return (
    <div
      key={card.id}
      className="group relative h-[100vh] lg:h-[100vh] w-[100vw] overflow-hidden bg-white"
      data-scroll-section
      ref={parallaxRef}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 lg:bg-center lg:mt-0 lg:bg-contain bg-[length:750px_450px] mt-[14%] bg-[center_right_22%]"
      ></div>
      <div className="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-6 place-content-center">
        <motion.div
          variants={variante}
          initial="inicio"
          animate="fin"
          className="col-span-3 lg:pl-10 gap-0"
        >
          <motion.p
            variants={variante}
            layout
            style={{ x: title1X }}
            className="text-[75px] lg:text-[150px] lg:leading-[140px] leading-[80px] font-normal uppercase text-black text-center lg:text-left mt-[100%] md:mt-[60%] lg:mt-0 font-cinzel"
          >
            {card.title1}
          </motion.p>
          <motion.p
            variants={variante}
            layout
            style={{ x: title2X }}
            className="lg:pl-4 lg:text-[115px] text-[32px] lg:leading-[100px] leading-[30px] font-normal text-black lg:text-left text-center font-irregardless tracking-[10px]"
          >
            {card.title2}
          </motion.p>
          <div className="w-[319px] h-[144px] flex flex-col justify-between m-auto lg:mt-20 lg:mx-0">
            <motion.p
              variants={variante}
              layout
              className="text-[60px] leading-normal font-normal text-black text-center uppercase"
            >
              {card.parrafo}
            </motion.p>
            <motion.div
              variants={variante}
              layout
              style={{ x: title3X }}
              className="text-center lg:text-left"
            >
              <button className="bg-verde-oscuro text-white w-full px-8 py-1 rounded-3xl text-[35px] uppercase">
                <a href={card.verMas}>Leer más</a>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

type CardType = {
  url: string;
  title1: string;
  title2: string;
  parrafo?: string;
  id: number;
  verMas: string;
};

const cards: CardType[] = [
  {
    url: "/fotos_octavio/fondo1.jpg",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    parrafo: "Teatro",
    id: 1,
    verMas: "/teatro",
  },
  {
    url: "/fotos_octavio/fondo1_1.jpg",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    parrafo: "Folclor",
    id: 2,
    verMas: "/folclor",
  },
  {
    url: "/fotos_octavio/fondo1_2.jpg",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    parrafo: "Música",
    id: 3,
    verMas: "/musica",
  },
];