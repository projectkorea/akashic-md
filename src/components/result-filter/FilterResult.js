import FilterButton from './FilterButton';

const FilterResult = ({ onSort }) => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', width: 800, height: 100 }}>
      <span>Result</span>
      <FilterButton onSort={onSort} colNum={1} />
      <FilterButton onSort={onSort} colNum={2} />
    </div>
  );
};

export default FilterResult;
