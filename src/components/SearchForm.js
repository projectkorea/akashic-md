import styled from 'styled-components';

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
          <input type='submit'></input>
        </form>
        <button onClick={onSearchReset}>download</button>
        <button onClick={onSearchReset}>Reset Search</button>
      </FormWrapper>
    </StyledWrapper>
  );
};

export default SearchForm;
