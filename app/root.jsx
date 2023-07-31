import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
} from "@remix-run/react";
import { Header } from "./components/header";
import Footer from "./components/footer";
import styles from "./styles/index.css";

export function meta() {
  return [
    {
      charset: "utf8",
      title: "GuitarLa - Remix",
      viewport: "width=device-width,initial-scale=1",
    },
  ];
}

//metodo para para pasar las hojas de estilo
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />{" "}
        {/*  sirve para que cuando usemos un link no se recargue la pagina*/}
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

//manejo de errores

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      {error.status}
      {error.statusText}
    </Document>
  );
}
