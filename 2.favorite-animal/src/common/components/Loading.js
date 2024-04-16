import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 24px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>로딩중...</h1>
    </LoadingContainer>
  );
};

export default Loading;
