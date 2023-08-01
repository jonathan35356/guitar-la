import ListadoGuitarras from "../components/listado-guitarras";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { useLoaderData } from "@remix-run/react";
import stylesGuitarras from "../styles/guitarras.css";
import stylesPosts from "../styles/blog.css";
import ListadoPosts from "../components/listado-posts";

export function meta() {
  return [{}];
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesGuitarras },
    { rel: "stylesheet", href: stylesPosts },
  ];
}

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return { guitarras: guitarras.data, posts: posts.data };
}

function Index() {
  const { guitarras, posts } = useLoaderData();

  return (
    <div>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </div>
  );
}

export default Index;
