import * as ErrorMessages from './errorMessages';
import { REGEX_CEP, REGEX_NOME, REGEX_EMAIL, validarCpf } from '../utils/validators';

export const required = (text) => {
    if (text) {
        return null;
    } else {
        return ErrorMessages.isRequired;
    }
};

export const mustMatch = (field, fieldName) => {
    return (text, state) => {
        return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
    };
};

export const minLength = (length) => {
    return (text) => {
        return text.length >= length ? null : ErrorMessages.minLength(length);
    };
};

export const maxLength = (length) => {
    return (text) => {
        return text.replace(/ /g, '').length <= length ? null : ErrorMessages.maxLength(length);
    };
};

/*export const isCartaoValid = (cartao) => {
    if (Iugu.utils.validateCreditCardNumber(cartao)) {
        return null;
    } else {
        return ErrorMessages.isInvalido();
    }
};*/

export const isEmailValid = (email) => {
    if (email.match(REGEX_EMAIL)) {
        return null;
    } else {
        return ErrorMessages.isInvalido();
    }
};

export const isNomeCartaoValido = (nome) => {
    if (nome.match(REGEX_NOME)) {
        return null;
    } else {
        return ErrorMessages.isInvalido();
    }
};

export const isCpfValid = (cpf) => {
    if (validarCpf(cpf)) {
        return null;
    } else {
        return ErrorMessages.isInvalido();
    }
};

export const isCepValid = (cep) => {

    if (cep && cep.match(REGEX_CEP) && cep.replace('-', '').length === 8) {
        return null;
    } else {
        return ErrorMessages.isInvalido();
    }
};