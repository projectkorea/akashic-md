import DetailList from './detail-list/DetailList';
import DetailButton from './detail-list/DetailButton';
import { useEffect } from 'react';

const ResultListDetail = ({ resultList, name, onUpdateByName }) => {
  useEffect(() => {
    onUpdateByName(name);
  }, [onUpdateByName, name]);
  console.log(resultList);
  const newList = resultList.data.map((item) => {
    return <DetailList key={item[0]} data={item} />;
  });

  return (
    <div style={{ border: '1px solid black', padding: 60 }}>
      {!resultList.isLoading && newList}
    </div>
  );
};

export default ResultListDetail;
