import MainFilterButton from './MainFilterButton';
import styled from 'styled-components';
import { useState } from 'react';
import { HeaderItem, TableRowWrapper } from '../../styled/table';

const Header = styled(TableRowWrapper)`
  border-bottom: 3px solid #0066ff;
  margin: 10px 0;
`;

const MainFilter = ({ onSort }) => {
  const [active, setActive] = useState({});
  const onActive = (colName) => () => {
    setActive({ [colName]: true });
  };
  return (
    <Header>
      <HeaderItem>Name</HeaderItem>
      <HeaderItem>
        FoxTrot
        <MainFilterButton
          onSort={onSort}
          colNum={1}
          active={active?.foxtrot}
          onActive={onActive('foxtrot')}
        />
      </HeaderItem>
      <HeaderItem>
        Golf
        <MainFilterButton
          onSort={onSort}
          colNum={2}
          active={active?.golf}
          onActive={onActive('golf')}
        />
      </HeaderItem>
    </Header>
  );
};

export default MainFilter;
