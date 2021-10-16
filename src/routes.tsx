import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Onboarding} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/sign-up" component={SignUp} exact />
            </Switch>
        </Router>
    );
}

export { Routes };