import Guitarra from "../components/guitarra";
import { getGuitarras } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/guitarras.css";

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

export function meta() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
      description: "GuitarLA - Nuestra colección de Guitarras",
    },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Tienda() {
  const guitarras = useLoaderData();

  return (
    <div className="contenedor">
      <h2 className="heading">Nuestra colección</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tienda;
