import React from "react";
import { getPosts } from "../models/posts.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const blogs = await getPosts();
  return blogs.data;
}

function Blog() {
  const blogs = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.attributes.titulo}</div>
        ))}
      </div>
    </main>
  );
}

export default Blog;
