import React from 'react';
import './SearchResult.css';

const SearchResult = ({ result }) => {
  return (
    <section className="results-container">
      <div className="results-wrapper">
        {result.title}
      </div>
    </section>
  );
}

export default SearchResult;