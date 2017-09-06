import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import meuTema from './styles/tema';

import { loadState, saveState } from './utils/localStorage';

import PromiseErrorHandler from './middlewares/promiseErrorHandler';

import routes from './routes';
import reducers from './reducers';
import './styles/css/index.css';

import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(PromiseErrorHandler)(createStore);

export const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider className="App" muiTheme={getMuiTheme(meuTema)}>
            {routes}
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
