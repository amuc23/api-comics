const express = require("express");
const cors = require("cors");
const { getDiscos, getDiscoById } = require("./discos.controllers");

const app = express();
const puerto = 2006;

app.use(cors());

app.get("/discos", getDiscos);
app.get("/discos/:id", getDiscoById);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});