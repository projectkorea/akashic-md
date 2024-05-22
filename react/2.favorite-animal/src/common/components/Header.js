import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 1100px;
  height: 83px;
  color: #ffffff;
  background-color: #323232;
  text-align: center;
  line-height: 83px;
  font-size: 32px;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return <HeaderContainer>{title}</HeaderContainer>;
};

export default Header;
