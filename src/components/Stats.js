import React, { useEffect, useState } from 'react';

export const Stats = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/titles')
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, [])

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.country}</p>
        </div>
      ))}
    </div>
  )
};
