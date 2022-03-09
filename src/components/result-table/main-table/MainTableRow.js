import SubTableView from '../SubTableView';
import { useState } from 'react';
import styled from 'styled-components';
import { HeaderItem, TableRowWrapper } from '../../../styled/table';

const StyledWrapper = styled.div``;

const TableRow = ({ item, isPostLoading }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StyledWrapper>
      <TableRowWrapper onClick={() => setIsClicked(!isClicked)}>
        <HeaderItem>{item[0]}</HeaderItem>
        <HeaderItem>{item[1]}</HeaderItem>
        <HeaderItem>{item[2]}</HeaderItem>
      </TableRowWrapper>
      {isClicked && <SubTableView name={item[0]} />}
    </StyledWrapper>
  );
};

export default TableRow;
