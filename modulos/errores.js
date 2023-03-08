function serompe(){
    return 3 + z
}

try {
    //serompe();
    seRompeAsincrona(console.log)
}catch (err){
    console.error('se rompio')
    console.error(err.message)
}


//errores asincronos

function seRompeAsincrona(cb){
    setTimeout(function(){
        try {
            return 3 + z
        } catch(err) {
            console.error('se rompio asincrona')
            cb(err)
        }
    })
}