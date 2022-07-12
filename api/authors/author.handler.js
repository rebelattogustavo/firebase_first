const crud = require("../../crud");

async function searchAuthors(){
    return await crud.get('authors');
};

async function searchAuthorsId(id){
    return await crud.getById('authors', id);
};

async function create(name, lastName, age) {
    await crud.save('authors', null, {name, lastName, age});
    return searchAuthors();
}

async function remove(id){
    return await crud.remove('authors', id);
};

module.exports = {
    searchAuthors,
    searchAuthorsId,
    create,
    remove
};