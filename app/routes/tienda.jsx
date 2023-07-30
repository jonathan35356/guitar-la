export async function loader() {
  const respuesta = await fetch(
    "http://localhost:1337/api/guitarras?populate=imagen"
  );
  const datos = await respuesta.json();
  console.log(datos);
  return {};
}

function Tienda() {
  return <div>Tienda</div>;
}

export default Tienda;
