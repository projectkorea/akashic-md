import DetailList from './detail-list/DetailList';
import DetailButton from './detail-list/DetailButton';

const ResultListDetail = () => {
  const deatilListView = [[1], [2]];
  deatilListView.map((item) => {
    return <DetailList />;
  });

  return (
    <div style={{ border: '1px solid black', padding: 60 }}>
      <DetailList />
      <DetailButton />
      {deatilListView}
    </div>
  );
};

export default ResultListDetail;
