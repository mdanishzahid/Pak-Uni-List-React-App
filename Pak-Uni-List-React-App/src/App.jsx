import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [universities, setUniversities] = useState([]);
  const apiUrl = 'http://universities.hipolabs.com/search?country=Pakistan';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">List of Universities</h1>
        <div className="grid grid-cols-3 gap-4">
          {universities.map((university, index) => (
            <div key={index} className="bg-white rounded-md p-4 shadow-md">
              <h2 className="text-xl font-bold mb-2">{university.name}</h2>
              <p className="text-gray-600 mb-2">{university['state-province']}, {university.country}</p>
              <p className="text-blue-500">
                Website: <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
