const express = require("express");
const router = express.Router();

const usuariosHandler = require("./usuarios.handler");

router.get("/", async (req, res) => {
    res.json(await usuariosHandler.buscarUsuarios());
});

router.post("/", async (req, res) => {
    const { nome, sobrenome } = req.body;
    res.json(await usuariosHandler.create(nome, sobrenome));
});

module.exports = router;