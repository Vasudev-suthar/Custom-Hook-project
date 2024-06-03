import React from 'react';
import './App.css';
import PhotoList from './components/photolist';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <h1>Photos</h1>
          <PhotoList data={data} />
        </>
      )}
    </div>
  );
}

export default App;