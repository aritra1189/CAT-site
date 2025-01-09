import React from 'react';
import '../styles/TableView.css';

function TableView({ data, fetchDetails }) {
  return (
    <table className="cat-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Breed</th>
        <th>Description</th>
        <th>Origin</th>
        <th>Life span</th>
        <th>Details</th>
        <th>Temperament</th>
      </tr>
    </thead>
    <tbody>
      {data.map((cat) => (
        <tr key={cat.id}>
          <td>
            <img src={cat.url} alt="Cat" />
          </td>
          <td>{cat.breeds?.[0]?.name || 'Unknown'}</td>
          <td>{cat.breeds?.[0]?.description || 'Description not available'}</td>
          <td>{cat.breeds?.[0]?.origin || 'not available'}</td>
          <td>{cat.breeds?.[0]?.life_span || 'not available'}</td>
          <td>{cat.breeds?.[0]?.temperament || 'not available'}</td>
          <td>
            <button onClick={() => fetchDetails(cat.id)}>View Details</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
  
  );
}

export default TableView;
