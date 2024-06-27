import React from 'react';

const Weather: React.FC = () => {
  // Simulating an error
  throw new Error("Failed to load weather");
  return (
    <div className="border border-gray-300 p-4">
      <h2 className="text-xl font-bold mb-2">Weather</h2>
      <p>Loading weather...</p>
    </div>
  );
};

export default Weather;
