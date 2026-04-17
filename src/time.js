function horaActual(){
    let ahora = new Date();

    let hora = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`  

    return hora
}


export  {horaActual}