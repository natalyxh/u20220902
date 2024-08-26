const fecha1 = new Date('2022-01-01');
const fecha2 = new Date('2022-01-20');

const diffInMs = fecha2.getTime() - fecha1.getTime();
const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

console.log(`la diferencia entre ${fecha1.toISOString()} y ${fecha2.toISOString()} es ${diffInDays} dias.`);