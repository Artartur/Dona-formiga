import React from "react";
import "../styles/card.css";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <div>
              <h1>+1000</h1>
              <p>Clientes atendidos</p>
            </div>
            <p></p>
            <div>
              <h1>+20</h1>
              <p>Docinhos deliciosos</p>
            </div>
            <p></p>
            <div>
              <h1>+5</h1>
              <p>Docerias na região</p>
            </div>
            <p></p>
            <div>
              <h1>+7</h1>
              <p>Anos no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
