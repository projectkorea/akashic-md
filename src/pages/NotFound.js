import styled from 'styled-components';

const Container = styled.div`
  width: 1440px;
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
      <button>Go Home</button>
    </Container>
  );
};

export default NotFound;
