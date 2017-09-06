export const REGEX_EMAIL = /^[A-Za-z][\w\d.-]*@[\w\d-]+(\.[\w\d-]+)+$/;
export const REGEX_NOME = /^([a-zA-Z])+([ ]([a-zA-Z])+)+$/
export const REGEX_CEP = /^([0-9]{5}[-][0-9]{3})|([0-9]{8})$/;

export function validarCpf(cpf) {

    const REGEX_CPF = /^([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11})|([0-9]{9}-[0-9]{2})$/;

    if (!cpf.match(REGEX_CPF)) {
        return false
    }

    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
        return false;
    // Valida 1o digito 
    let add = 0;
    let rev, i;;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i), 10) * (10 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9), 10))
        return false;
    // Valida 2o digito 
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i), 10) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10), 10))
        return false;
    return true;
}

export const ruleRunner = (campo, nome, ...validacoes) => {

    return (state) => {

        for (let validacao of validacoes) {

            let errorMessageFunc = validacao(state[campo], state);
            if (errorMessageFunc) {

                return { [campo]: errorMessageFunc(nome) };
            }
        }

        return null;
    };
};

export const run = (state, runners) => {

    return runners.reduce((memo, runner) => {

        return Object.assign(memo, runner(state));
    }, {});
};