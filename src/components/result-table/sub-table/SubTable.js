import SubTableRow from './SubTableRow';
import Loading from '../../../parts/Loading';
import { useEffect, useState } from 'react';
import { TableRowWrapper, ButtonBox } from '../../../styled/table';
import styled from 'styled-components';

const SubTableRowWrapper = styled(TableRowWrapper)`
  padding: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 5px;
  margin-right: 10px;
  button + button {
    margin-top: 5px;
  }
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
    <SubTableRowWrapper>
      {!isPostLoaded ? (
        <Loading top={200} />
      ) : (
        <div>
          <ButtonWrapper>
            <ButtonBox color='purple' onClick={() => onSelectAll(true, name)}>
              check all
            </ButtonBox>
            <ButtonBox color='red' onClick={() => onSelectAll(false, name)}>
              clear all
            </ButtonBox>
          </ButtonWrapper>
          {subTable}
        </div>
      )}
    </SubTableRowWrapper>
  );
};

export default SubTable;
