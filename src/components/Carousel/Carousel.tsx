import * as React from 'react';
import CarouselTile from './CarouselTile/CarouselTile';
import './Carousel.scss';

type CarouselProps = {
  headingDescription: string;
  heading: string;
  data: Array<object>;
};

export default function Carousel(props: CarouselProps) {
  const { heading, headingDescription, data } = props;
  return (
    <div className="carousel">
      <div className="carousel__header">
        <p className="carousel__header__description">{headingDescription}</p>
        <h2 className="carousel__header__heading">{heading}</h2>
      </div>
      <div className="carouselTiles">
        {data.map((tileData: any, i) => (
          <CarouselTile
            key={`${tileData.name}-${i}`}
            lineOne={tileData.lineOne}
            lineTwo={tileData.lineTwo}
            linkedIn={tileData.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
