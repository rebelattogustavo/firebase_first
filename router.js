const express = require("express");
const router = express.Router();

const usuario = require("./api/usuarios/usuarios.controller");
const authors = require("./api/authors/author.controller");


router.use("/usuario" , usuario);
router.use("/authors" , authors);

module.exports = router;