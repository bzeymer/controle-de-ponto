import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Cadastro from './components/Cadastro';
import NotFound from './components/NotFound';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

export default (
    <BrowserRouter>
        <App>
            <Route component={ScrollToTop} />
            <Switch>
                <Route path="/" render={() => (
                    <Home>
                        <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/cadastro" component={Cadastro} />
                                {/* <Route path="/assinantes" component={Assinantes} />
                                <Route path="/afiliados" component={Afiliados} />
                                <Route path="/livros" component={Livros} /> */}
                                <Route path="*" component={NotFound} />
                        </Switch> 
                    </Home>
                )} />
            </Switch>         
        </App>
    </BrowserRouter>
);