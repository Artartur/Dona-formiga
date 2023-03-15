import React from "react";
import confectioner from "../assets/confectioner.jpg";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-titles">
          <h2>Sobre nós</h2>
        </div>
        <div className="about-texts">
          <div className="about-image">
            <img src={confectioner} alt="Imagem de um confeiteiro" />
          </div>
          <div className="about-desc">
            <h3>Entenda quem somos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod
              tempor incididunt ut labore et dolore magna Ut enim ad minim
              veniam, quis nostrud exercitation ut aliquip ex ea commodo
              consequat. Duis aute irure reprehenderit in voluptate velit esse
              cillum dolore eu. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
