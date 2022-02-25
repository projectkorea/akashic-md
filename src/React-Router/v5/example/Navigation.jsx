import styled from 'styled-components';

const Nav = styled.div`
  padding: 24px;
  & > a:not(:first-of-type) {
    margin-left: 24px;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </Nav>
  );
}
