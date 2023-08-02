import ListadoGuitarras from "../components/listado-guitarras";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { useLoaderData } from "@remix-run/react";
import stylesGuitarras from "../styles/guitarras.css";
import { getCurso } from "../models/cursos.server";
import stylesPosts from "../styles/blog.css";
import ListadoPosts from "../components/listado-posts";
import Curso from "../components/curso";
import stylesCurso from "../styles/curso.css";

export function meta() {
  return [{}];
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesGuitarras },
    { rel: "stylesheet", href: stylesPosts },
    { rel: "stylesheet", href: stylesCurso },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <div>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
        <Curso curso={curso.attributes} />
      </main>

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </div>
  );
}

export default Index;
