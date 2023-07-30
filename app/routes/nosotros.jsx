import React from "react";
import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros ",
      description: "Venta de guitarras, blog de musica",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload", //para cargar imagenes pesadas
      href: imagen,
      as: "imagen", //se debe guardar como imagen
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Nam tempus vestibulum mauris porta lacinia. Morbi euismod lacus ex,
            et malesuada magna facilisis non. Nunc et nisl lobortis, auctor orci
            quis, tempor metus. Donec lacus velit, pellentesque vel velit sit
            amet, venenatis bibendum nisl.
          </p>

          <p>
            Nam tempus vestibulum mauris porta lacinia. Morbi euismod lacus ex,
            et malesuada magna facilisis non. Nunc et nisl lobortis, auctor orci
            quis, tempor metus. Donec lacus velit, pellentesque vel velit sit
            amet, venenatis bibendum nisl.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
