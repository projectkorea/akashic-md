import React, { useEffect } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import PageLayout from './components/PageLayout';

import { registerUser, loginUser } from './service/auth';

export default function UserLogin() {
  // NotFound 페이지를 Route를 이용해 Router에 추가하세요.
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/register'>
          <RegisterPage />
        </Route>

        <PrivateRoute path='/detail'>
          <UserDetailPage />
        </PrivateRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

function LoginPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    const foundUser = loginUser(formData);

    if (!foundUser) return;

    const location = {
      pathname: '/detail',
      state: {
        user: foundUser,
      },
    };

    history.push(location);
  };

  return (
    <PageLayout heading='Login' links={[{ to: '/register', text: 'Register' }]}>
      <LoginForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    registerUser(formData);
    history.push('/login');
  };

  return (
    <PageLayout heading='Register' links={[{ to: '/login', text: 'Login' }]}>
      <RegisterForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

function UserDetailPage() {
  const history = useHistory();
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    return () => history.replace();
  }, [history]);

  return (
    <PageLayout
      heading='User Details'
      links={[{ to: '/login', text: 'Logout' }]}
    >
      <div>
        <em>email : {user.email}</em>
      </div>
    </PageLayout>
  );
}

function NotFoundPage() {
  return (
    <PageLayout heading='Not Found' links={[{ to: '/login', text: 'Go Back' }]}>
      <div>아무것도 없다</div>
    </PageLayout>
  );
}
