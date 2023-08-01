export async function getPosts() {
  const url = "http://192.168.1.22:1337/api/posts?populate=imagen";
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  return datos;
}
