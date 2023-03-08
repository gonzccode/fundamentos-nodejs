const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

readableStream.on('data', function (chunk){
    data += chunk;
});

readableStream.on('end', function(){
    console.log(data)
});

//falta el de escritura

process.stdout.write('efe ');