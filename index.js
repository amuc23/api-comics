const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;

const { comics } = require("./comics.js");

app.use(cors());

app.get("/", (req, res) => {
  res.json(comics);
});

app.get("/:id", (req, res) => {
  const comic = comics.find(c => c.id === parseInt(req.params.id));
  if (!comic) {
    return res.status(404).send("Cómic no encontrado");
  }
  res.json(comic);
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});

