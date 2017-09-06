export function formatarReais(valorEmCentavos) {
    valorEmCentavos = valorEmCentavos.toString().split('.')[0];
    var string = (valorEmCentavos / 100).toString();
    if (!string.includes('.')) {
        return string.concat(',00');
    } else {
        const centavos = string.split('.')[1];
        if (centavos.length === 1) {
            string = string.concat('0');
        }
        if (centavos.length >= 3) {
            string = string.split('.')[0];
            string = string.concat(centavos[0] + centavos[1]);
        }
    }
    return string.replace('.', ',');
}

export function segundosParaHms(segundos) {
    segundos = Number(segundos);
    var h = Math.floor(segundos / 3600);
    var m = Math.floor(segundos % 3600 / 60);
    var s = Math.floor(segundos % 3600 % 60);

    var hDisplay = h > 0 ? (h < 10 ? ('0' + h) : h) : '00';
    var mDisplay = m > 0 ? (m < 10 ? ('0' + m) : m) : '00';
    var sDisplay = s > 0 ? (s < 10 ? ('0' + s) : s) : '00';

    return hDisplay + ':' +mDisplay + ':' + sDisplay;
}