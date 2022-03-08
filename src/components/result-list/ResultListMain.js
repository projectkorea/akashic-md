import ResultListDetail from '../../containers/ResultListDetail';
import { useState } from 'react';

const ResultListMain = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsClicked(!isClicked)}
        style={{ width: 800, height: 100, border: '2px solid red' }}
      >
        <li>{`${item[0]}: ${item[1]} ${item[2]}`}</li>
      </div>
      {isClicked && <ResultListDetail name={item[0]} />}
    </>
  );
};

export default ResultListMain;
