import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

export const StartPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/titles')
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        const filteredResults = data.filter((item) => {
          return value && item && item.title.toLowerCase().includes(value)
        });
        setResults(filteredResults);
      })
  };

  const handleChange = (value) => {
    setSearchInput(value)
    fetchData(value)
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
      <div className="results-list">
        {results.map((result) => (
          <div key={result.show_id}>
            <Link to={`titles/${result.show_id}`}>
              <p>{result.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
