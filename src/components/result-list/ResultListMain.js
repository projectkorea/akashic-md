import ResultListDetail from '../../containers/ResultListDetail';
import { useState } from 'react';

const ResultListMain = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsClicked(!isClicked)}
        style={{ width: 800, height: 100, border: '2px solid red' }}
      >
        <li>{`${data[0]}: ${data[1]} ${data[2]}`}</li>
      </div>
      {isClicked && <ResultListDetail name={data[0]} />}
    </>
  );
};

export default ResultListMain;
