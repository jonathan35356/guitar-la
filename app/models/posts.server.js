export async function getPosts() {
  const url = "http://192.168.1.22:1337/api/posts?populate=imagen";
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  return datos;
}

export async function getPost(url) {
  const respuesta = await fetch(
    `http://192.168.1.22:1337/api/posts?filters[url]=${url}&populate=imagen`
  );
  const datos = await respuesta.json();
  console.log(datos);
  return datos;
}
