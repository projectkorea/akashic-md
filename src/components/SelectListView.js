import SelectList from './result-select/SelectList';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #BDCEFF;
  border: 1px solid black;
`;

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
  return <StyledWrapper>{selectedList.length !== 0 && newList}</StyledWrapper>;
};

export default SearchListView;
