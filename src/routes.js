import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import App from './components/App';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

export default (
    <BrowserRouter>
        <App>
            <Route component={ScrollToTop} />
            <Switch>
                {/* <Route path="/login" component={Login} /> */}
            </Switch>         
        </App>
    </BrowserRouter>
);