import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [loaded, setLoaded] = useState(false);
  const [duckUrl, setDuckUrl] = useState('');

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
