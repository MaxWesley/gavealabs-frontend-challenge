import { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { useAuth } from './hooks/auth';

function Routes() {
    const { user } = useAuth();

    if (localStorage.getItem('isLogged') === 'false' || !user) {
        return (
            <Fragment>
                <Redirect to="/" exact />
                <Route path="/" component={Onboarding} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/sign-up" component={SignUp} exact />
            </Fragment>
        );
    }

    if (localStorage.getItem('isLogged') === 'true' || user) {
        return (
            <Fragment>
                <Redirect to="/dashboard" exact />
                <Route path="/dashboard" component={Dashboard} exact />
            </Fragment>
        );
    }

    return null;
}

export { Routes };