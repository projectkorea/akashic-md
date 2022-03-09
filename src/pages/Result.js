import SearchForm from '../containers/SearchForm';
import SelectListView from '../containers/SelectListView';
import TableView from '../components/result-table/TableView';
import styled from 'styled-components';
import { ButtonBox } from '../styled/table';
import { useState } from 'react';

const ResultWrapper = styled.div`
  width: 1192px;
  position: relative;
  background-color: #ffffff;
  margin-top: 39px;
  padding: 30px;
  border-radius: 10px;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.view ? 'row-reverse' : 'column')};
  justify-content: start;
`;

const ViewController = styled.div`
  position: absolute;
  top: 100px;
  right: 39px;
  z-index: 2;
`;

const Result = () => {
  const [view, setView] = useState(false);
  return (
    <ResultWrapper>
      <SearchForm></SearchForm>
      <ViewController onClick={() => setView(!view)}>
        <ButtonBox color='dark-gray'>view</ButtonBox>
      </ViewController>
      <ViewWrapper view={view}>
        <SelectListView></SelectListView>
        <TableView></TableView>
      </ViewWrapper>
    </ResultWrapper>
  );
};

export default Result;
