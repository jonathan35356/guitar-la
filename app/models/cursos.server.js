export async function getCurso() {
  const response = await fetch(
    "http://192.168.1.20:1337/api/curso?populate=imagen"
  );

  return await response.json();
}
