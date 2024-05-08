import { motion } from "framer-motion";

interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    heroImg: string;
    title: string;
    autor: string;
    bio: string;
    description: string;
    pubDate: string;
    category: string[];
    descargar: string;
  };
}

interface Props {
  post: Post;
}

const LibrosItem: React.FC<Props> = ({ post }) => {
  
  const librosVariant = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.5, duration: 1, staggerChildren: 0.5 },
    },
  };

  return (
    <motion.div
    initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div
      variants={librosVariant}
      layout
       className="libros-item mt-8">
        <div
          className=" relative h-auto sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"
        >
          <a className="book-container w-full h-[200px] lg:h-auto" href={`/libros/${post.slug}`}>
            <div className="book mt-8">
              <img
                src={post.data.heroImg}
                width={300}
                height={600}
                alt="libro"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LibrosItem;
