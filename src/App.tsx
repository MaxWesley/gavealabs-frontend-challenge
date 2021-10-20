import { ToastContainer } from "react-toastify";

import { BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from './contexts/auth';
import { Routes } from "./routes";


const App = () => (
    <>
        <ToastContainer position="top-center" />
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Routes />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    </>
);

export default App;
