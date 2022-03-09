import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 78px;
  width: 1336px;
  border-radius: 16px;
  background: #fcfefe;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
`;

const List = styled.ul`
  position: absolute;
  display: flex;
  align-items: column;
  margin-top: 24px;
`;

const ListItem = styled.li`
  &:first-child {
    margin-left: 30.45px;
  }
  & a {
    display: block;
    width: 109.8px;
    height: 40px;
    margin-right: 20px;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Link to='/alpha'>Alpha</Link>
        </ListItem>
        <ListItem>
          <Link to='/beta'>Beta</Link>
        </ListItem>
        <ListItem>
          <Link to='/charlie'>Charlie</Link>
        </ListItem>
        <ListItem>
          <Link to='/delta'>Delta</Link>
        </ListItem>
        <ListItem>
          <Link to='/echo'>Echo</Link>
        </ListItem>
        <ListItem>
          <Link to='/result'>Result</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigation;
