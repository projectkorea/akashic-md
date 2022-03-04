import { useState, useEffect } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setToggle(!toggle);
    console.log('🤪');
  }, [toggle]);

  return <></>;
};

export default App;
