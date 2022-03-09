import SubTableRow from './SubTableRow';
import Loading from '../../../parts/Loading';
import { useEffect } from 'react';
import { TableRowWrapper } from '../../../styled/table';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const SubTable = ({
  resultList,
  isPostLoading,
  name,
  onUpdateByName,
  onSelect,
  onSelectAll,
}) => {
  useEffect(() => {
    onUpdateByName(name);
  }, [onUpdateByName, name]);

  const subTable = resultList[name]?.map((item) => {
    return <SubTableRow key={item[0]} data={item} onSelect={onSelect(name)} />;
  });

  return (
    <TableRowWrapper>
      {isPostLoading ? (
        <Loading />
      ) : (
        <div>
          <ButtonWrapper>
            <button onClick={() => onSelectAll(true, name)}>Check All</button>
            <button onClick={() => onSelectAll(false, name)}>Clear All</button>
          </ButtonWrapper>
          {subTable}
        </div>
      )}
    </TableRowWrapper>
  );
};

export default SubTable;
