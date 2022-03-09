import SubFilterButton from './SubFilterButton';
import styled from 'styled-components';
import { useState } from 'react';
import { HeaderItem, TableRowWrapper } from '../../styled/table';

const Header = styled(TableRowWrapper)`
  border-bottom: 2px solid black;
  margin: 10px 0;
  width: 1000px;
  border-bottom: 3px solid #0066ff;
`;

const SubFilter = ({ onSortById, name }) => {
  const [active, setActive] = useState({});
  const onActive = (colName) => () => {
    setActive({ [colName]: true });
  };
  return (
    <Header>
      <HeaderItem>id</HeaderItem>
      <HeaderItem>
        FoxTrot
        <SubFilterButton
          onSortById={onSortById}
          colNum={1}
          active={active?.foxtrot}
          onActive={onActive('foxtrot')}
          name={name}
        />
      </HeaderItem>
      <HeaderItem>
        Golf
        <SubFilterButton
          onSortById={onSortById}
          colNum={2}
          active={active?.golf}
          onActive={onActive('golf')}
          name={name}
        />
      </HeaderItem>
    </Header>
  );
};

export default SubFilter;
