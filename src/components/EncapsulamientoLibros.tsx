import { useState } from "react";
import LibrosItem from "./LibrosItem";

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
  posts: Post[];
}

const EncapsulamientoLibros: React.FC<Props> = ({ posts }) => {
  const [mostrarLibros, setMostrarLibros] = useState(false);

  const verMas = () => {
    if (!mostrarLibros) {
      setMostrarLibros(true);
    }else{
      setMostrarLibros(false)      
    }
  }

  const postSlice = mostrarLibros ? posts.slice(0,) : posts.slice(0, 3);

  return (
    <>
      <div className="w-full h-auto grid grid-cols-3 place-items-center lg:mt-20">
        {postSlice.map((post) => (
          <LibrosItem post={post} />
        ))}
      </div>
     { !mostrarLibros &&
       <div className="w-full text-center">
       <button
         onClick={verMas}
         id="btn"
         className="mt-10 text-center uppercase px-8 py-2 bg-verde-oscuro text-[18px] lg:text-[30px] text-white rounded-[50px]"
         type="button"
       >
         Ver más
       </button>
     </div>
     }
    </>
  );
};

export default EncapsulamientoLibros;
