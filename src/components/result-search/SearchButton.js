import { useState } from 'react';

const SearchButton = ({ onSort, colNum }) => {
  const [option, setOption] = useState({
    isDesc: false,
    colNum,
  });
  return (
    <button
      style={{ width: 100, height: 100 }}
      onClick={() => {
        setOption({ ...option, isDesc: !option.isDesc });
        onSort(option)();
      }}
    >
      버튼
    </button>
  );
};

export default SearchButton;
