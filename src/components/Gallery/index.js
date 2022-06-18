import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({currentCategory}) {
  const {name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <div className="flex-row">
        <PhotoList category={currentCategory.name} ></PhotoList>
      </div>
    </section>
  );
}

export default Gallery;