import DetailList from './detail-list/DetailList';
import DetailButton from './detail-list/DetailButton';

const ResultListDetail = () => {
  const deatilListView = [[1], [2]];
  deatilListView.map((item) => {
    return <DetailList />;
  });

  return (
    <div>
      <DetailButton />
      {deatilListView}
    </div>
  );
};

export default ResultListDetail;
