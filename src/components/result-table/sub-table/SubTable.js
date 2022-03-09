import SubTableRow from './SubTableRow';
import Loading from '../../../parts/Loading';
import { useEffect } from 'react';
import { TableWrapper } from '../../../styled/table';
// import styled from 'styled-components';

// const StyleWrapper = style.div`

// `;

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
    <TableWrapper>
      {isPostLoading ? (
        <Loading />
      ) : (
        <div>
          <button onClick={() => onSelectAll(true, name)}>Check All</button>
          <button onClick={() => onSelectAll(false, name)}>Clear All</button>
          {subTable}
        </div>
      )}
    </TableWrapper>
  );
};

export default SubTable;
