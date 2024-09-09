function verificarCodigoDescuento(codigo) {

    const codigosAceptables = ['DESC10', 'OFF20', 'Onepiece1118'];

    return new Promise((resolve, reject) => {
        if (codigosAceptables.includes(codigo)) {
            resolve("Código de descuento válido");
        } else {
            reject("Código de descuento no válido");
        }
    });
}


verificarCodigoDescuento('DESC10')
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

verificarCodigoDescuento('INVALIDO')
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

    verificarCodigoDescuento('Onepiece1118')
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

    //U20220902