import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 100px;
  left: 0px;
  top: 0px;
`;

const HeaderImg = styled.div`
  position: absolute;
  width: 200px;
  left: 15px;
  top: 14px;
  background-image: url(./assets/images/junhakim.png);
  background-repeat: no-repeat;
`;

const HeaderText = styled.h1`
  width: 250px;
  left: 15px;
  font-size: 28px;
`;

const Header = () => {
  return (
    <Container>
      <HeaderText>Data Table Project</HeaderText>
    </Container>
  );
};

export default Header;
