const knex = require('../db/connection');

function getAllMonestry() {
    return knex('monastery').select('*').where('status', '1');

}

function getAllMonestryList() {
    return knex.select('monastery.*', 'file.name as file_name').from('monastery')
        .leftJoin('file', 'monastery.id', 'file.other_id').where({ 'file.type': "MONESTRY" })
}


function getAllMonestryById(id) {
    return knex.select('monastery.*').from('monastery').where({ 'monastery.id': id }).then(result => result[0])
}

function getMonasteryDetail(id, type) {
    return knex.select('monastery.*', 'file.name as file_name').from('monastery')
        .leftJoin('file', 'monastery.id', 'file.other_id').where({ 'monastery.id': id, 'file.type': type }).then(result => result[0])
}

function getMonestryDeleteById(id) {
    return knex('monastery').where({ id: id }).update({ status: '0' });
}

function addMonestry(monestry) {
    return knex('monastery').insert(monestry).then((result) => getAllMonestryById(result));
}

function updateMonestry(id, monestry) {
    return knex('monastery').where({ id: id }).update(monestry).then((result) => getAllMonestryById(result));
}
module.exports = {
    getAllMonestry,
    getAllMonestryList,
    getAllMonestryById,
    getMonasteryDetail,
    getMonestryDeleteById,
    addMonestry,
    updateMonestry
}