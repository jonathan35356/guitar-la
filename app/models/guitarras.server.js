export async function getGuitarras() {
  const urlApi = "http://192.168.1.22:1337/api/guitarras?populate=imagen";

  const respuesta = await fetch(urlApi);
  return await respuesta.json();
}

export async function getGuitarra(url) {
  const respuesta = await fetch(
    `http://192.168.1.22:1337/api/guitarras?filters[url]=${url}&populate=imagen`
  );
  return await respuesta.json();
}
