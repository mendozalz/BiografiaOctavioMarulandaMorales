import { useState } from "react";
import LibrosItemWrapper from "./LibrosItemWrapper";

interface Props {
  posts: Array<{
    slug: string;
    data: {
      title: string;
      heroImg: string;
      description: string;
      pubDate: string;
      category?: string[];
    };
  }>;
  postsPerPage: number;
}

const Paginacion: React.FC<Props> = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Renderiza tus posts aquí */}
      {currentPosts.map((post) => (
        <LibrosItemWrapper
          slug={post.slug}
          title={post.data.title}
          heroImg={post.data.heroImg}
          description={post.data.description}
          pubDate={post.data.pubDate}
          category={post.data.category}
        />
      ))}

      {/* Botones de paginación */}
      <div>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= posts.length}
        >
          Leer más
        </button>
      </div>
    </div>
  );
};

export default Paginacion;
