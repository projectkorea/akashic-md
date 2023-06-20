import Main from './pages/Main';
import Classification from './pages/Classification';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const getMainData = (data) => {
    setData(data);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main getMainData={getMainData} />} />
        <Route
          path='/classification'
          element={<Classification data={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
