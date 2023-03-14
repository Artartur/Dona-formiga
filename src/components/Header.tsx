import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container" id="container">
          <div className="logo">
            <a href="#">
              <h2>Dona Formiga</h2>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#container">Inicio</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#doces">Doces</a>
              </li>
              <li>
                <a href="#contatos">Contatos</a>
              </li>
            </ul>
          </nav>
          <div className="button">
            <a href="#">Realizar Pedido</a>
          </div>
        </div>
      </header>
    </>
  );
}
