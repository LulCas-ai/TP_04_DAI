import express from "express";
import {horaActual} from "./time"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(horaActual());
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 3000");
});