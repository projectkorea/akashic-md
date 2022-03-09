import SubTableRow from './SubTableRow';
import Loading from '../../../parts/Loading';
import { useEffect, useState } from 'react';
import { TableRowWrapper } from '../../../styled/table';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const SubTable = ({
  resultList,
  name,
  onUpdateByName,
  onSelect,
  onSelectAll,
}) => {
  const [isPostLoaded, setIsPostLoaded] = useState(false);
  useEffect(() => {
    onUpdateByName(name);

    resultList[name]?.length &&
      resultList[name].length !== 0 &&
      setIsPostLoaded(true);
  }, [onUpdateByName, name, resultList]);

  const subTable = resultList[name]?.map((item) => {
    return <SubTableRow key={item[0]} data={item} onSelect={onSelect(name)} />;
  });

  return (
    <TableRowWrapper>
      {!isPostLoaded ? (
        <Loading top={200} />
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
