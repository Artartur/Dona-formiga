import React from 'react';
import confeiteiro from '../assets/brigadeiro.png';
import '../styles/about.css';

export default function About() {
  return (
    <>
      <div className="about-container">
        
        <div className="about-texts">
          <h2>Sobre nós</h2>
          <h1>Entenda quem somos</h1>
          <div className="about-desc">
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