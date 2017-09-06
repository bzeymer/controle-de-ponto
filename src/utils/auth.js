export function isLogged(usuario) {
    if (usuario) {
        if (usuario.token) {
            return true;
        }
    }

    return false;
}