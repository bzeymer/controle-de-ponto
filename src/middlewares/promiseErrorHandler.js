/*
**  Middleware que trata as promises e trata erros caso aconteçam
*/


export default function({ dispatch }) {
    return next => action => {

        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
        .then(function(response) {
            const newAction = { ...action, payload: response.data };
            dispatch(newAction);
        })
        .catch(function(error) {

            if(error.response){

                if (error.response.data.message){
                    /* const newAlerta = {
                        mostrar: true,
                        tipo: 'danger',
                        mensagem: error.response.data.message
                    };

                    const alertAction = { type: NOVO_ALERTA, payload: newAlerta }; 
                    dispatch(alertAction);*/
                }
            }
        });
    }
}