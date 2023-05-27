const knex = require('../db/connection');

function addFile(file) {
    return knex('file').insert(file).then((result) => result)
}

function getFileById(id, type) {
    return knex('file').where({ other_id: id, type: type }).select();
}

function getAllFile() {
    return knex('file').select();
}

function deleteFile(id, type) {
    return knex('file').where({ other_id: id, type: type }).del();
}

function deleteFileById(id) {
    return knex('file').where({ id: id }).del();
}

function updateFileById(id, type, image) {
    return knex('file').update({ name: image }).where({ other_id: id, type: type }).then((result) => result)
}

function updateFile(id, file) {
    return knex('file').where({ id: id }).update(file).then(result => getFileById(result))
}
module.exports = {
    addFile,
    getFileById,
    updateFileById,
    getAllFile,
    deleteFile,
    deleteFileById,
    updateFile



};