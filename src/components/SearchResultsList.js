/* eslint-disable react/no-array-index-key */
import React from 'react';
import SearchResult from './SearchResult';

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id} />
        })
      }
    </div>
  )
};
