import styled from 'styled-components';
import { ButtonBox } from '../styled/table';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid blue;
  padding-bottom: 48px;
  margin-bottom: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchForm = ({ onSearch, onSearchReset }) => {
  return (
    <StyledWrapper>
      <h1>Result</h1>
      <FormWrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(e.target.search.value);
          }}
        >
          <input type='text' name='search'></input>
          <ButtonBox color='purple'>search</ButtonBox>
        </form>
        <ButtonBox color='purple'>download</ButtonBox>
        <ButtonBox color='purple' onClick={onSearchReset}>
          Refresh
        </ButtonBox>
      </FormWrapper>
    </StyledWrapper>
  );
};

export default SearchForm;
