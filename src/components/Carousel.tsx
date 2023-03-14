import { useState } from "react";
import brigadeiro from "../assets/brigadeiro.png";
import beijinho from "../assets/beijinho.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/carousel.css";

export default function Carousels() {
  return (
    <>
      <Carousel controls={false} indicators={false} className="a">
        <Carousel.Item interval={1000} >
          <img className="image" src={beijinho} alt="brigadeiro" />
        </Carousel.Item>
        <Carousel.Item interval={1000} >
          <img className="image" src={beijinho} alt="beijinho" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
