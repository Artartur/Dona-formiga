import React from 'react';
import Carousels from './Carousel';
import Card from './Card';
import Candies from './Candies';
import '../styles/home.css';
import ImageCard from './ImageCard';
import brigadeiro from '../assets/brigadeiro.png';
import About from './About';

export default function Home() {
  return (
    <>
      <main>
        <section className="home">
          <div className="containerHome">
            <div className="texts">
              <h4>BEM VINDOS A DONA FORMIGA DOCERIA!</h4>
              <h1>A melhor doceria da região</h1>
              <p>
                Não fornecemos apenas doces, fornecemos o amor, a paixão e o
                <p>prazer para os nossos clientes saborear.</p>
              </p>
              <button>REALIZE SEU PEDIDO</button>
            </div>
            <div className="carousel">
              <Carousels />
            </div>
          </div>
        </section>
        <Card />
        <section className="candies">
          <Candies>
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10}
            />
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10.0}
            />
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10.0}
            />
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10.0}
            />
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10.0}
            />
            <ImageCard
              url={brigadeiro}
              alt={'brigadeiro'}
              title={'Brigadeiro'}
              units={10}
              value={10.0}
            />
          </Candies>
        </section>
        <section className="about">
          <About />
        </section>
      </main>
    </>
  );
}
