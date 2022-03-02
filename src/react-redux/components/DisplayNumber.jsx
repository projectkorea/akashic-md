const DisplayNumber = ({ number, test }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h1>Display Number</h1>
      <input type='text' value={number} readOnly />
      <h5>{test}</h5>
    </div>
  );
};

export default DisplayNumber;
