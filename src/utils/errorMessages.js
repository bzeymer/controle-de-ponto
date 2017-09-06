export const isRequired = () => 'Campo obrigatório';

export const mustMatch = field => {
    return () => `Campos de ${field} não conferem`;
};

export const isInvalido = () => {
    return (fieldName) => `${fieldName} é inválido`;
};

export const minLength = length => {
    return (fieldName) => fieldName === 'Senha' 
        ? `${fieldName} muito curta. Mínimo ${length} caracteres` 
        : `${fieldName} muito curto. Mínimo ${length} caracteres`;
};

export const maxLength = length => {
    return (fieldName) => `${fieldName} muito longo. Máximo ${length} caracteres`;
};