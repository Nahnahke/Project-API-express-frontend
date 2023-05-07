import { React, useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState('');

  const FetchData = (value) => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/titles')
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((item) => {
          return value && item && item.title.toLowerCase().includes(value)
        });
        setResults(results);
      })
  };
  const handleChange = (value) => {
    setSearchInput(value)
    FetchData(value)
  };

  return (
    <section className="search-container">
      <div className="search-wrapper">
        <form>
          <label htmlFor="input">
            <input
              type="text"
              id="input"
              placeholder="Search for movie title"
              value={searchInput}
              onChange={(e) => handleChange(e.target.value)} />
          </label>
        </form>
      </div>
    </section>
  );
}