const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su apellido: ', (apellido) => {
    const saludo = `Hola, ${nombre} ${apellido}!`;
    console.log(saludo);
    rl.close();
  });
});