import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        // Handle error if needed
      });
  }, []);

  return (
    <div>
      <header>
        Data Generated From Django
      </header>
      <hr></hr>
      {details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
