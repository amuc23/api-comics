const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;

const { getComics, getComicById } = require("./comics.controllers");


app.use(cors());

// Ruta para obtener todos los cómics
app.get("/", (req, res) => {
  console.log("Petición para obtener todos los cómics");
  getComics(req, res);
});

// Ruta para obtener un cómic por ID
app.get("/:id", (req, res) => {
  console.log(`Petición para obtener el cómic con ID: ${req.params.id}`);
  getComicById(req, res);
});

// Inicializar el servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
