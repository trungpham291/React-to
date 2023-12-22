
import React, { useState } from 'react';


const Student = ({ id, name, image, email }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="student-card">
      <img src={image} alt={`Student ${name}`} />
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        {showDetails && <p>ID: {id}</p>}
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default Student;

