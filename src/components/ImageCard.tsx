import React from "react";
import "../styles/candies.css";

type Card = {
  alt : string;
  title: string;
  units: number;
  url: string;
  value: number;
}

export default function ImageCard(props:Card) {
  return (
    <>
      <div>
        <img src={props.url} alt={props.alt} />
        <div className="container-candies-texts">
          <p className="title">{props.title}</p>
          <p className="value">
            Valor: R$ {props.value} - {props.units} unidades
          </p>
        </div>
      </div>
    </>
  );
}
