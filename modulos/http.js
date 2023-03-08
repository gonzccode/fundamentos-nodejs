const http = require('http');

http.createServer(router).listen(8080);

function router(req, res) {
    console.log('nueva peticion');
    console.log(req.url);
    switch(req.url){
        case '/hola':
            res.write('hola esto es la ruta /hola');
            res.end(); 
            break;

        default:
            res.write('error 404');
            res.end();
    }

    res.writeHead(201, {'Content-Type': 'text/plain'})
    //escribir respuesta usuario
    res.write('hola esto es la resuesta')
    res.end();

}

console.log('escuchando http en el puerto 3000')