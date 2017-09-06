import { combineReducers } from 'redux';

import PadraoReducer from './reducerPadrao';

const rootReducer = combineReducers({
    
    //Entidade padrão
    padrao: PadraoReducer,
    
});

export default rootReducer;
