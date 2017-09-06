import { combineReducers } from 'redux';

import NavReducer from './reducerNav';

const rootReducer = combineReducers({
    
    //Entidade Nav
    nav: NavReducer,
    
});

export default rootReducer;
