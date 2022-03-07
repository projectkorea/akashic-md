import ResultList from './result-list/ResultList';

const ResultListView = () => {
  const listView = [
    ['찰리', 100],
    ['배내자', 1000],
  ];
  listView.map((item) => {
    return <ResultList key={item[0]} />;
  });
  return <div>{listView}</div>;
};

export default ResultListView;
