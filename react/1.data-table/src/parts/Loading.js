import styled from 'styled-components';
import { Spinner } from '../styled/globalStyled';

const Container = styled.div`
  height: ${(props) => `${props.top}px`};
  position: relative;
`;

const Loading = ({ top }) => {
  return (
    <Container top={top}>
      <Spinner />
    </Container>
  );
};

export default Loading;
