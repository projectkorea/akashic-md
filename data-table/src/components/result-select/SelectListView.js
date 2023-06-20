import SelectList from './SelectList';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #bdcdffc7;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  border-radius: 10px;
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
