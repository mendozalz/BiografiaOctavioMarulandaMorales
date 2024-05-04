import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/fotos_octavio/Ocatvio_foto_14.jpg",
      scale: scale4,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_2.jpg",
      scale: scale5,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_1.jpg",
      scale: scale6,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_9.jpg",
      scale: scale5,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_11.jpg",
      scale: scale6,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_10.jpg",
      scale: scale8,
    },
    {
      src: "/fotos_octavio/Ocatvio_foto_6.jpg",
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="zoomContainer">
      <div className="zoomSticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="zoomEl">
              <div className={`zoomImageContainer ${index}`}>
                <img src={src} alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
