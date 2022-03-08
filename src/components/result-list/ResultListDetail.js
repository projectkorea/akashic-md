import DetailList from './detail-list/DetailList';
import DetailButton from './detail-list/DetailButton';
import { useEffect } from 'react';

const ResultListDetail = ({ resultList, name, onUpdateByName }) => {
  useEffect(() => {
    onUpdateByName(name);
  }, [onUpdateByName, name]);

  const newList = resultList[name]?.map((item) => {
    return <DetailList key={item[0]} data={item} />;
  });

  return (
    <div style={{ border: '1px solid black', padding: 60 }}>{newList}</div>
  );
};

export default ResultListDetail;
