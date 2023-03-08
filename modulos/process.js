process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
})

process.on('exit', () => {
    console.log('ale, el proceso acabo');
    setTimeout(() => {
        console.log('esto no se va a ver nunca')
    },0);
})

setTimeout(() => {
    console.log('esto se va a ver')
},0);

process.on('uncaughtException', (err, origen) => {
    console.log('esto es para captura el error');
    setTimeout(() => {
        console.log('esto es de las excepciones')
    },0);
})

funcionquenoexiste();

console.log('esto no se recoge por el error')