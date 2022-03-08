import Loading from '../../parts/Loading';
import ResultListMain from '../result-list/ResultListMain';
import { useEffect } from 'react';

const ResultList = ({ resultData, searchData, onUpdate }) => {
  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  const postList = resultData.data?.map((item) => {
    return <ResultListMain key={item[0] + item[1]} item={item} />;
  });

  const searchList = searchData.data?.map((item) => {
    return <ResultListMain key={item[0] + item[1]} item={item} />;
  });

  return (
    <>
      {resultData.isLoading ? (
        <Loading />
      ) : searchData.isSearching ? (
        searchList
      ) : (
        postList
      )}
    </>
  );
};

export default ResultList;
