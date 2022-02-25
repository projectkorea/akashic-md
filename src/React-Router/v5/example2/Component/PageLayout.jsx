import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function PageLayout({ heading, links, children }) {
  return (
    <div>
      <h2>{heading}</h2>

      <nav>
        <LinkList>
          {links.map(({ to, text }) => (
            <li key={to}>
              <NavLink to={to}>{text}</NavLink>
            </li>
          ))}
        </LinkList>
      </nav>

      <main>{children}</main>
    </div>
  );
}

export default PageLayout;

const LinkList = styled.ul`
  padding: 0;

  li {
    list-style: none;

    & + & {
      margin-top: 8px;
    }
  }
`;
