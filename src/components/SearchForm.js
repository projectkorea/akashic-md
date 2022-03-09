import styled from 'styled-components';
import { ButtonBox, InputBox } from '../styled/table';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  padding-bottom: 48px;
  margin-bottom: 10px;
  position: sticky;
  background-color: rgba(255, 255, 255, 0.9);
  top: 10px;
  z-index: 2;
`;

const FormWrapper = styled.div`
  width: 520px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  padding-left: 30px;
`;

const SearchForm = ({ onSearch, onSearchReset }) => {
  return (
    <StyledWrapper>
      <Title>Result</Title>
      <FormWrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(e.target.search.value);
          }}
        >
          <InputBox
            placeholder={'search'}
            color='purple'
            type='text'
            name='search'
          ></InputBox>
          <ButtonBox color='purple'>search</ButtonBox>
        </form>
        <ButtonBox color='purple'>download</ButtonBox>
        <ButtonBox color='green' onClick={onSearchReset}>
          refresh
        </ButtonBox>
      </FormWrapper>
    </StyledWrapper>
  );
};

export default SearchForm;
