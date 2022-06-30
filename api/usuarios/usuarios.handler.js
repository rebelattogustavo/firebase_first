const crud = require("../../crud");

async function buscarUsuarios(){
    return await crud.get('pessoas');
};

async function create(nome, sobrenome) {
    await crud.save('pessoas', null, {nome, sobrenome});
    return buscarUsuarios();
}

module.exports = {
    buscarUsuarios,
    create
}