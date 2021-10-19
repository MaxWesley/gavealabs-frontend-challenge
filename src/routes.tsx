import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Onboarding} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/sign-up" component={SignUp} exact />
                <Route path="/dashboard" component={Dashboard} exact />
            </Switch>
        </Router>
    );
}

export { Routes };