import MainTable from '../../containers/MainTable';
import MainFilter from '../../containers/MainFilter';
import styled from 'styled-components';

const ViewWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TableView = () => {
  return (
    <ViewWrapper>
      <MainFilter />
      <MainTable />
    </ViewWrapper>
  );
};

export default TableView;
