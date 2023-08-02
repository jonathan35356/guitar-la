import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../../models/guitarras.server";
import styles from "../styles/guitarras.css";

export const loader = async ({ params }) => {
  const { guitarraUrl } = params;
  const datos = await getGuitarra(guitarraUrl);
  if (datos.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
    });
  }
  return datos.data[0].attributes;
};

export function meta({ data }) {
  //cuando el loader se carga la datas queda lista
  if (data.length === 0) {
    return [
      {
        title: "GuitarLA - No encontrada",
        description: "Guitarras, venta de guitarras, guitarra no encontrada",
      },
    ];
  }
  return [
    {
      title: `GuitarLA - ${data.nombre}`,
      description: `Guitarras, venta de guitarras, guitarra ${data.nombre}`,
    },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra;
  return (
    <main className="contenedor guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
