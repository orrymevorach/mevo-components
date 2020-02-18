import * as React from 'react';
import './CarouselTile.scss';

type AttorneyProps = {
  lineOne: string,
  lineTwo: string,
  img?: string,
  linkedIn?: string,
};

export default (props: AttorneyProps) => {
  const { lineOne, lineTwo, linkedIn } = props
  return (
    <div className="carouselTile">
      <div className="imageContainer"></div>
      <div className="textContainer">
        <p className="textContainer--name">{lineOne}</p>
        <p className="textContainer--job">{lineTwo}</p>
      </div>
    </div>
  );
};