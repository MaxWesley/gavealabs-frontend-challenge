import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Onboarding} />
            </Switch>
        </Router>
    );
}

export { Routes };