import styled from 'styled-components';
import { HeaderItem, TableRowWrapper } from '../../../styled/table';

const SubTableWrapper = styled(TableRowWrapper)`
  width: 1000px;
`;

const SubTableRow = ({ data, onSelect }) => {
  return (
    <SubTableWrapper onClick={() => onSelect(data[0])}>
      <HeaderItem>{data[0]}</HeaderItem>
      <HeaderItem>{data[0]}</HeaderItem>
      <HeaderItem>{data[0]}</HeaderItem>
    </SubTableWrapper>
  );
};

export default SubTableRow;
