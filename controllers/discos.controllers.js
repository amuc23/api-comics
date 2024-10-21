const { request, response } = require("express");
const { discos } = require("./discos");

const getDiscos = (req, res) => {
  return res.json({
    ok: true,
    statusCode: 200,
    discos
  });
};

const getDiscoById = (req = request, res = response) => {
  let id = parseInt(req.params.id);
  let discoABuscar = discos.find((disco) => disco.id === id);

  if (discoABuscar) {
    return res.json({
      ok: true,
      statusCode: 200,
      discoABuscar
    });
  } else {
    return res.json({
      ok: false,
      statusCode: 404,
      msg: "No hay discos con ese ID"
    });
  }
};

module.exports = {
  getDiscos,
  getDiscoById
};