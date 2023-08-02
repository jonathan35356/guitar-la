export async function getPosts() {
  try {
    const url = "http://192.168.1.20:1337/api/posts?populate=imagen";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(url) {
  try {
    const respuesta = await fetch(
      `http://192.168.1.20:1337/api/posts?filters[url]=${url}&populate=imagen`
    );
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
  } catch (error) {
    console.log(error);
  }
}
