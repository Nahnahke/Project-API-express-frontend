/* eslint-disable camelcase */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { show_id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(`https://project-express-api-e3l32b2upq-lz.a.run.app/titles/${show_id}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
      .console.log('setMovieData:', setMovieDetails);
  }, [show_id]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.release_year}</p>
      <p>{movieDetails.genres && movieDetails.genres.join(', ')}</p>
      <p>{movieDetails.duration}</p>
      <p>{movieDetails.directors && movieDetails.directors.join(', ')}</p>
      <p>{movieDetails.actors && movieDetails.actors.join(', ')}</p>
      <p>{movieDetails.description}</p>
    </div>
  );
};
