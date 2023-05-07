import React, { useState } from 'react';
import { SearchBar } from 'components/SearchBar';
import { SearchResultsList } from 'components/SearchResultsList';

export const App = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  )
}
