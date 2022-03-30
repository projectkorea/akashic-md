import { useEffect, useLayoutEffect, useState } from 'react';

function App() {
  const [duckUrl, setDuckUrl] = useState('');

  useEffect(() => {
    setDuckUrl('/duck0.png');
  }, []);

  // useLayoutEffect(() => {
  //   setDuckUrl('/duck0.png');
  // }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100vh',
      }}
    >
      <img alt='duck' src={duckUrl} style={{ width: 500 }} />
    </div>
  );
}

export default App;
