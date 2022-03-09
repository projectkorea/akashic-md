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
  height: 73px;
  left: 15px;
  top: 14px;
  background-image: url(./assets/images/HITS_logo.png);
  background-repeat: no-repeat;
`;

const Header = () => {
  return (
    <Container>
      <HeaderImg />
    </Container>
  );
};

export default Header;
