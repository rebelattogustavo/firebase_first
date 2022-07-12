const crud = require("../../crud");

async function buscarUsuarios(){
    return await crud.get('usuario');
};

async function buscarUsuariosId(){
    
    return crud.get('usuario', req.params.id);
};

async function create(nome, sobrenome) {
    await crud.save('usuario', null, {nome, sobrenome});
    return buscarUsuarios();
}

module.exports = {
    buscarUsuarios,
    create
}