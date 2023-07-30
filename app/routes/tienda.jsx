import Guitarra from "../components/guitarra";
import { getGuitarras } from "../models/guitarras.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

export function Tienda() {
  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra colección</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Tienda;
