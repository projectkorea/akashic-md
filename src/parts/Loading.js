import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <h1>로딩중</h1>
    </Container>
  );
};

export default Loading;
