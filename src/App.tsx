import { ToastContainer } from "react-toastify";

import { BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from './contexts/auth';
import { Routes } from "./routes";
import { Fragment } from "react";

const App = () => (
    <Fragment>
        <ToastContainer position="top-center" />
        <BrowserRouter >
            <AuthProvider>
                <Switch>
                    <Routes />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    </Fragment>
);

export default App;
