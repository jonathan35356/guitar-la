import Logo from "../../public/img/logo.svg";
import { Link } from "@remix-run/react";
import Navegacion from "./nav";
export function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img src={Logo} className="logo" alt="imagen logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}
