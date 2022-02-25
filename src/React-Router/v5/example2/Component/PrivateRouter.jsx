import { Route, Redirect, useLocation } from 'react-router-dom';

function PrivateRoute({ children: Component, ...props }) {
  const location = useLocation();

  return (
    <Route
      {...props}
      render={(componentProps) => {
        // location.state가 없으면, /login 페이지로 이동합니다.
        const isLoggedIn = !!location.state?.user;

        if (!isLoggedIn) {
          return <Redirect to='/login' />;
        }

        return Component;
      }}
    />
  );
}

export default PrivateRoute;
