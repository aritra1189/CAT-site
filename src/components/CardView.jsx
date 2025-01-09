import React from 'react';
import '../styles/CardView.css';

function CardView({ data }) {
  return (
    <div className="card-container">
    {data.map((cat) => (
      <div key={cat.id} className="card">
        <img src={cat.url} alt={cat.breeds?.[0]?.name || 'Cat'} />
        <h3>{cat.breeds?.[0]?.name || 'Unknown Breed'}</h3>
      </div>
    ))}
  </div>
  
  );
}

export default CardView;
