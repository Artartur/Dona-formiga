import React from "react";
import "../styles/candies.css";
import ImageCard from "./ImageCard";

type Props = {
  children: JSX.Element[];
}

export default function Candies({children}:Props) {
  return (
    <>
    <div className="candy-titles">
        <h2>Doces</h2>
        <h1>Nossos doces mais vendidos</h1>
    </div>
    <div className="container-candies-card">
      {children}
    </div>
    </>
  );
}
