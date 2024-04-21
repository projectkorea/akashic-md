// query string 활용하기

// URL의 query string 정보를 활용해 앱을 구성할 수 있음.
// • URLSearchParams API를 활용함

function ContactPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const address = searchParams.get('address');
  return (
    <PageLayout header='Contact Page'>
      <em>{email}</em>
      <br />
      <strong>{address}</strong>
    </PageLayout>
  );
}

{
  /* <Link to="/contact?email=example@example.com&address=Seoul">
Contact
</Link> // App */
}
