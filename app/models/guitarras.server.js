export async function getGuitarras() {
  const url = "http://192.168.1.22:1337/api/guitarras?populate=imagen";

  const respuesta = await fetch(url);
  return await respuesta.json();
}
