import FilterButton from './FilterButton';
import styled from 'styled-components';
import { useState } from 'react';
import { HeaderItem } from '../../styled/table';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid black;
  margin: 10px 0;
`;

const FilterHeader = ({ onSort }) => {
  const [active, setActive] = useState({});
  const onActive = (colName) => () => {
    setActive({ [colName]: true });
  };
  return (
    <Header>
      <HeaderItem>Name</HeaderItem>
      <HeaderItem>
        FoxTrot
        <FilterButton
          onSort={onSort}
          colNum={1}
          active={active?.foxtrot}
          onActive={onActive('foxtrot')}
        />
      </HeaderItem>
      <HeaderItem>
        Golf
        <FilterButton
          onSort={onSort}
          colNum={2}
          active={active?.golf}
          onActive={onActive('golf')}
        />
      </HeaderItem>
    </Header>
  );
};

export default FilterHeader;
