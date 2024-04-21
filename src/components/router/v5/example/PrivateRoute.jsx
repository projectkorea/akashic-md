function ContactPage() {
  const location = useLocation();
  const searchParams = newURLSearchParams(location.search);
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
