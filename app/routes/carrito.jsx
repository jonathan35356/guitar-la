import styles from "../styles/carrito.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return [
    {
      title: "GuitarLA - Carrito de Compras",
      description: "Venta de guitarras, música, blog, carrito de compras",
    },
  ];
}

export default function Carrito() {
  return (
    <main className="contenedor">
      <h1 className="heading">carrito</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
        </div>

        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar $45</p>
        </aside>
      </div>
    </main>
  );
}
