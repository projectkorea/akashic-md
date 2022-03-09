import SubTableView from '../SubTableView';
import { useState } from 'react';
import styled from 'styled-components';
import { HeaderItem, TableRowWrapper, NameBox } from '../../../styled/table';

const StyledWrapper = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    background-color: ${(props) => props.isClicked || '#f5f5f5'};
  }
  cursor: pointer;
`;

const TableRow = ({ item, isPostLoading }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StyledWrapper isClicked={isClicked}>
      <TableRowWrapper onClick={() => setIsClicked(!isClicked)}>
        <HeaderItem>
          <NameBox>{item[0]}</NameBox>
        </HeaderItem>
        <HeaderItem>{item[1]}</HeaderItem>
        <HeaderItem>{item[2]}</HeaderItem>
      </TableRowWrapper>
      {isClicked && <SubTableView name={item[0]} />}
    </StyledWrapper>
  );
};

export default TableRow;
