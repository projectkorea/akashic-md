import ResultListMain from '../result-list/ResultListMain';
import ResultListDetail from '../result-list/ResultListDetail';
import { useState } from 'react';

const ResultList = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div onClick={() => setIsClicked(!isClicked)}>
        <ResultListMain />
      </div>
      {isClicked && <ResultListDetail />}
    </div>
  );
};

export default ResultList;
