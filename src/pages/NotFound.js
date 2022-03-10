import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonBox } from '../styled/table';

const Container = styled.div`
  width: 1440px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <ButtonBox color='red'>
        <Link to='/result'>Go home</Link>
      </ButtonBox>
    </Container>
  );
};

export default NotFound;
