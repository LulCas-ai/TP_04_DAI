import express from "express";
import {horaActual, fechaActual} from "./time.js"


console.log("estamos trabajando angi")
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile("C:/Users/devandroid/Desktop/TP_04_DAI/src/img/mike.png");
});

app.get('/hora', (req, res) => {
    res.send(horaActual());
});

app.get('/fecha-completa', (req, res) => {
    res.send(fechaActual());
});

app.use((req, res, next) => {
  res.status(404).send("esto no funciona angi-ene de portriene");
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 3000 y siendo escuchado atentamente");
});