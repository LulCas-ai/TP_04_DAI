function horaActual() {
    let ahora = new Date();

    let hora = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`

    return hora
}

function fechaActual() {
    let ahora = new Date();
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
    ahora = `${dias[ahora.getDay()]} ${ahora.getDate()} de ${meses[ahora.getMonth()]} de ${ahora.getFullYear()}, ${horaActual()}`

    return ahora
}

console.log(horaActual())

export { horaActual, fechaActual }