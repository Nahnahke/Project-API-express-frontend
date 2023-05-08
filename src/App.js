import React from 'react';
import { StartPage } from 'components/StartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="titles/title/:title" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
