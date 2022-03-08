import { useState } from 'react';
import SearchButton from './SearchButton';

const ResultSearch = ({ onSort }) => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', width: 800, height: 100 }}>
      <span>Result</span>
      <SearchButton onSort={onSort} colNum={1} />
      <SearchButton onSort={onSort} colNum={2} />
    </div>
  );
};

export default ResultSearch;
