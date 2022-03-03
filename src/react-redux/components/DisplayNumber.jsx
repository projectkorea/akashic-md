const DisplayNumber = ({ number, test, onHandler }) => {
  onHandler();
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h1>Display Number</h1>
      <input type='text' value={number} readOnly />
      <p>{test}</p>
    </div>
  );
};

export default DisplayNumber;
