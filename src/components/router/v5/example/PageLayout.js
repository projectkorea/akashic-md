import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageLayout({ header, children }) {
  return (
    <Layout>
      <Navigation />
      <header>
        <h2>{header}</h2>
      </header>
      <main>{children}</main>
    </Layout>
  );
}
