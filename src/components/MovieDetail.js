import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lottie from './Loading';
import './MovieDetail.css';

export const MovieDetails = () => {
  const { title } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://project-express-api-e3l32b2upq-lz.a.run.app/titles/id/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data.body.title);
        setTimeout(() => setIsLoading(false), 2000);
      })
  }, [title]);

  return (
    <div className="movie-detail-container">
      {isLoading ? (
        <Lottie />
      ) : (
        <>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.release_year}</p>
          <p>{movieDetails.genres && movieDetails.genres.join(', ')}</p>
          <p>{movieDetails.duration}</p>
          <p>{movieDetails.directors && movieDetails.directors.join(', ')}</p>
          <p>{movieDetails.actors && movieDetails.actors.join(', ')}</p>
          <p>{movieDetails.description}</p>
          <Link to="/">Return</Link>
        </>
      )}
    </div>
  );
};
