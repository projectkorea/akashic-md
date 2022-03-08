import ResultListMain from '../result-list/ResultListMain';
import { useEffect } from 'react';

// resultList인자는 리덕스의 state입니다.
const ResultList = ({ resultList, onUpdate }) => {
  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  const newList = resultList.data.map((item) => {
    return <ResultListMain key={item[0] + item[1]} data={item} />;
  });

  return <>{!resultList.isLoading && newList}</>;
};

export default ResultList;
