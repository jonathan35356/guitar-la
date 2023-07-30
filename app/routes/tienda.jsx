import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const respuesta = await fetch("http://192.168.1.22:1337/api/guitarras");
  const datos = await respuesta.json();
  console.log(datos);
  return {};
}

export function Tienda() {
  // const datos = useLoaderData();
  // console.log(datos);
  return <div>Tienda2</div>;
}

export default Tienda;
