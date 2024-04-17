import axios from 'axios';
import { useEffect, useState } from 'react';
import './skeleton.css';
function App() {
  const [loaded, setLoaded] = useState(false);
  const [duckUrl, setDuckUrl] = useState('');

  useEffect(() => {
    const getDuck = async () => {
      const {
        data: { url },
      } = await axios.get('https://random-d.uk/api/random');
      setDuckUrl(url);
    };
    getDuck();
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ width: 500, height: 500 }} className='skeleton'>
        <img
          alt='duck'
          src={duckUrl}
          style={loaded ? { display: 'block' } : { display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default App;
