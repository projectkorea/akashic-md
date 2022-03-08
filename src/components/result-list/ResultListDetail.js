import DetailList from './detail-list/DetailList';
import DetailButton from './detail-list/DetailButton';
import { useEffect } from 'react';

const ResultListDetail = ({
  resultList,
  name,
  onUpdateByName,
  onSelect,
  onSelectAll,
}) => {
  useEffect(() => {
    onUpdateByName(name);
  }, [onUpdateByName, name]);

  const newList = resultList[name]?.map((item) => {
    return <DetailList key={item[0]} data={item} onSelect={onSelect(name)} />;
  });

  return (
    <div style={{ border: '1px solid black', padding: 60 }}>
      <button onClick={() => onSelectAll(true, name)}>Check All</button>
      <button onClick={() => onSelectAll(false, name)}>Clear All</button>
      {newList}
    </div>
  );
};

export default ResultListDetail;
