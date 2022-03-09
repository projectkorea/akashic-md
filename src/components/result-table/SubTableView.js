import SubTable from '../../containers/SubTable';
import SubFilter from '../../containers/SubFilter';
import styled from 'styled-components';

const SubTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #eeeeee;
  position: relative;
`;

const SubTableView = ({ name }) => {
  return (
    <SubTableWrapper>
      <SubFilter name={name} />
      <SubTable name={name} />
    </SubTableWrapper>
  );
};

export default SubTableView;
