import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
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
  return (
    <div
      key={card.id}
      className="group relative h-[100vh] lg:h-[92vh] w-[100vw] overflow-hidden bg-white"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 lg:bg-center lg:mt-0 lg:bg-contain bg-[length:750px_450px] bg-right -mt-[60%]"
      ></div>
      <div className="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-6 place-content-center">
        <div className="col-span-3 lg:pl-10 gap-0">
          <p className="text-[75px] lg:text-[150px] lg:leading-[140px] font-normal uppercase text-black text-center lg:text-left mt-[120%] lg:mt-0 font-cinzel">
            {card.title1}
          </p>
          <p className="lg:pl-4 lg:text-[115px] text-[32px] lg:leading-[100px] leading-[0px] font-normal text-black lg:text-left text-center font-irregardless tracking-[10px]">
            {card.title2}
          </p>
          <p className="lg:pl-4 lg:leading-[32px] text-[18px] lg:text-[30px] font-normal text-black lg:text-left text-center font-cinzel mt-8 lg:mt-14">
            {card.parrafo}
          </p>
          <div className="text-center lg:text-left">
            <button className="bg-green-200 px-8 py-2 rounded-3xl text-[20px] uppercase mt-4">
              Leer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title1: string;
  title2: string;
  parrafo?: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    parrafo: "Nace el 7 de Ocutbre en Manizales, en el barrio Mayo frío.",
    id: 1,
  },
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 2,
  },
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 3,
  },
  /* {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 4,
  },
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 5,
  },
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 6,
  },
  {
    url: "/temporal/OMM_solo-Photoroom.png",
    title1: "Octavio",
    title2: "Marunlanda Morales",
    id: 7,
  }, */
];
