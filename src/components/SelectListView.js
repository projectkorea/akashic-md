import SelectList from './result-select/SelectList';

const SearchListView = ({ selectedList, onSelect }) => {
  const newList = selectedList.map((item) => {
    return (
      <SelectList
        key={Object.keys(item)[0]}
        item={Object.values(item)}
        onSelect={onSelect}
      />
    );
  });
  return (
    <div style={{ border: '2px solid black' }}>
      <h1>선택한 건 여기에 나옵니다.</h1>
      <div>선택한 목록</div>
      {newList}
      <hr />
    </div>
  );
};

export default SearchListView;
