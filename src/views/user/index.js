import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserLayout from 'layout/UserLayout';

// const Login = React.lazy(() =>
//   import(/* webpackChunkName: "user-login" */ './login')
// );
const Otp = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './Otp')
);
const Register = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ './register')
);
const ChangePassword = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ './changePassword')
);

const ForgotPassword = React.lazy(() =>
  import(/* webpackChunkName: "user-forgot-password" */ './forgot-password')
);
const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ './reset-password')
);

const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
          {/* <Route
            path={`${match.url}/login`}
            render={(props) => <Login {...props} />}
          /> */}

          <Route
            path={`${match.url}/otp`}
            render={(props) => <Otp {...props} />}
          />

          <Route
            path={`${match.url}/changePassword`}
            render={(props) => <ChangePassword {...props} />}
          />
          <Route
            path={`${match.url}/register`}
            render={(props) => <Register {...props} />}
          />
          <Route
            path={`${match.url}/forgot-password`}
            render={(props) => <ForgotPassword {...props} />}
          />
          <Route
            path={`${match.url}/reset-password/:token`}
            render={(props) => <ResetPassword {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
