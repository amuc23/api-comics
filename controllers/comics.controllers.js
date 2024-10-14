const { request, response } = require("express");
const { comics } = require("./comics");

const getComics = (req, res) => {    
    return res.status(200).json({
        ok: true,
        statusCode: 200,
        data: comics
    });
}

const getComicById = (req = request, res = response) => {    
    let id = parseInt(req.params.id);

    let comicABuscar = comics.find((comic) => comic.id === id);

    if (comicABuscar) {
        return res.status(200).json({
            ok: true,
            statusCode: 200,
            data: comicABuscar
        });
    } else {
        return res.status(404).json({
            ok: false,
            statusCode: 404,
            msg: "No hay cómic con ese ID"
        });
    }
}

module.exports = {
    getComics,
    getComicById
}
