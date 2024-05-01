import axios from 'axios';
import { useEffect, useState, useLayoutEffect } from 'react';
function App() {
  const [loaded, setLoaded] = useState(false);
  const [duckUrl, setDuckUrl] = useState('');

/*
  // 1. 
    useEffect(() => {
      setDuckUrl('/images/duck0.png');
  }, []);

  // 2. 
    useLayoutEffect(() => {
      setDuckUrl('/images/duck0.png');
    }, []);
*/
  // 3. Fetch the duck URL
  useEffect(() => {
    const getDuck = async () => {
      const {
        data: { url },
      } = await axios.get('/api/duck/random');
      setDuckUrl(url);
    };
    getDuck();
  }, []);

  return (
    // for 1,2 case
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'black',
    //     height: '100vh',
    //   }}
    // > <img alt='duck' src={duckUrl} style={{ width: 500 }} />
    // </div>
    <div style={{ backgroundColor: "black" }}>
      <div style={{ width: 500, height: 500 }} className="skeleton">
        <img
          className="image"
          alt="duck"
          src={duckUrl}
          style={loaded ? { display: "block" } : { display: "none" }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default App;
