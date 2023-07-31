export async function getPosts() {
  const urlApi = "http://192.168.1.22:1337/api/posts?populate=imagen";
  const respuesta = await fetch(urlApi);
  return await respuesta.json();
}
