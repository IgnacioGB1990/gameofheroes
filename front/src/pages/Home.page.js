import React from "react";
import useFetch from "../../src/components/Hooks/useFetch"
import { Carousel } from 'react-bootstrap'
import '../App.css'

export const HomePage = () => {
  const { heroes, loading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");

  if (loading) {
    return <div>
      Cargando los datos...
    </div>
  }

  return <div>
    <Carousel className="carouselSpace">
      <Carousel.Item>
        <img
          className="homeLabel"
          src={heroes[476].images.sm}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Game of Heroes</h3>
          <p>Recruit amongst 560 heroes from your childhood.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeLabel"
          src={heroes[550].images.sm}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Battle with you friends</h3>
          <p>Every heroe has its strengths and weaknesses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeLabel"
          src={heroes[509].images.sm}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Only one can survive</h3>
          <p>Choose wisely what your next move will be as it may be your last one </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>;

};
