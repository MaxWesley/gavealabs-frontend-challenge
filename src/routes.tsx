import { Redirect, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { useAuth } from './hooks/auth';

function Routes() {
    const { user } = useAuth();

    if (localStorage.getItem('isLogged') === 'false' || !user) {
        return (
            <>
                <Redirect to="/" />
                <Route path="/" component={Onboarding} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/sign-up" component={SignUp} exact />
            </>
        );
    }

    if (localStorage.getItem('isLogged') === 'true' || user) {
        return (
            <>
                <Redirect to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} exact />
            </>
        );
    }

    return null;
}

export { Routes };