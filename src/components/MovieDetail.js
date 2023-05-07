import { React } from 'react';

export const MovieDetails = ({ result }) => {
  return (
    <div>
      <h2>{result.title}</h2>
      <p>{result.release_year}</p>
      <p>{result.genres.join(', ')}</p>
      <p>{result.duration}</p>
      <p>{result.directors.join(', ')}</p>
      <p>{result.actors.join(', ')}</p>
      <p>{result.description}</p>
    </div>
  );
};

