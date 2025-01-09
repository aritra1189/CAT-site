import React, { useState } from 'react';
import CardView from './components/CardView';
import TableView from './components/TableView';
import { fetchRandomCat, fetchCatDetails } from './Api';

function App() {
  const [catData, setCatData] = useState([]);
  const [view, setView] = useState('table');

  const handleFetchData = async () => {
    const data = await fetchRandomCat();
    setCatData(data);
  };

  const handleFetchDetails = async (id) => {
    const details = await fetchCatDetails(id);
    setCatData([details]);
  };

  return (
    <div className="app-container">
      <h1>Cat Management Application</h1>
      <div className="buttons">
        <button onClick={handleFetchData}>Fetch Random Cat</button>
        <button onClick={() => setView(view === 'table' ? 'card' : 'table')}>
          Toggle View
        </button>
      </div>
      {view === 'table' ? (
        <TableView data={catData} fetchDetails={handleFetchDetails} />
      ) : (
        <CardView data={catData} />
      )}
    </div>
  );
}

export default App;
