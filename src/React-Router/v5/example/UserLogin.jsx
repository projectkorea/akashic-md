import React from 'react';
// 필요한 모듈을 추가로 import하세요.
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default function UserLogin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/detail'>
          <UserDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div>
      <h2>Home P우웰컴age</h2>
      <div>
        <Link to='/login'>로그인</Link>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
        <Link></Link>
      </div>
    </div>
  );
}

// DetailPage 페이지 컴포넌트를 구현하세요.
function UserDetailPage() {
  const location = useLocation();
  const searchParamas = new URLSearchParams(location.search);

  const email = searchParamas.get('email');
  const password = searchParamas.get('password');

  if (!email || !password) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to='/'>Homepage</Link>
    </div>
  );
}
