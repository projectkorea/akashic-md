import SearchForm from '../containers/SearchForm';
import SelectListView from '../containers/SelectListView';
import TableView from '../components/result-table/TableView';
import styled from 'styled-components';
import { useState } from 'react';

const ResultWrapper = styled.div`
  width: 1192px;
  position: relative;
  background-color: #ffffff;
  margin-top: 79px;
  padding: 30px;
  border-radius: 10px;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.view ? 'row-reverse' : 'column')};
  & {
    flex-grow: 1;
  }
  & + & {
    flex-grow: 2;
  }
`;

const ViewController = styled.button`
  position: absolute;
  top: 100px;
  right: 0px;
`;

const Result = () => {
  const [view, setView] = useState(false);
  return (
    <ResultWrapper>
      <SearchForm></SearchForm>
      <ViewController onClick={() => setView(!view)}>뷰 체인지</ViewController>
      <ViewWrapper view={view}>
        <SelectListView></SelectListView>
        <TableView></TableView>
      </ViewWrapper>
    </ResultWrapper>
  );
};

export default Result;
