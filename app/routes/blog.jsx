import React from "react";
import { getPosts } from "../models/posts.server";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/blog.css";
import ListadoPosts from "../components/listado-posts";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export function meta() {
  return [{ title: "GuitarLa - Nuestro Blog" }];
}

function Blog() {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  );
}

export default Blog;
