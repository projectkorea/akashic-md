import Loading from '../../parts/Loading';
import ResultListMain from '../result-list/ResultListMain';
import { useEffect } from 'react';

const ResultList = ({ resultList, onUpdate }) => {
  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  const newList = resultList.data?.map((item) => {
    return <ResultListMain key={item[0] + item[1]} item={item} />;
  });

  return <>{resultList.isLoading ? <Loading /> : newList}</>;
};

export default ResultList;
