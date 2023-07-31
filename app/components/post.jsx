/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "@remix-run/react";
import React from "react";

function Post({ post }) {
  const { titulo, contenido, imagen, url, publishedAt } = post.attributes;
  console.log(imagen);
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        className="imagen"
        alt={`imagen blog ${titulo}`}
      ></img>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{publishedAt}</p>
        <p className="resumen">{contenido}</p>
        <Link to={`posts/${url}`} className="enlace">
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Post;
