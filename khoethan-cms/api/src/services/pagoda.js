const knex = require('../db/connection');

function getAllPagoda() {

    return knex.select('pagoda.*', 'monastery.name as monastery_name').from('pagoda').leftJoin('monastery', 'monastery.id', 'pagoda.monastery_id').where('pagoda.status', '1')
}

function getPagodaList() {
    return knex.select('pagoda.*', 'file.name as file_name').from('pagoda')
        .leftJoin('file', 'pagoda.id', 'file.other_id').where({ 'file.type': 'PAGODA', 'pagoda.status': '1' })
}

function getAllPagodaById(id) {
    return knex.select('pagoda.*').from('pagoda').leftJoin('monastery', 'monastery.id', 'pagoda.monastery_id').where({ 'pagoda.id': id }).then(result => result[0])
}

function getPagodaDetail(id, type) {
    return knex.select('pagoda.*', 'file.name as file_name').from('pagoda')
        .leftJoin('file', 'pagoda.id', 'file.other_id').where({ 'pagoda.id': id, 'file.type': type }).then(result => result[0])
}

function getPagodaItemList(id, type) {
    return knex.select('pagoda.*', 'file.name as file_name').from('pagoda')
        .leftJoin('file', 'pagoda.id', 'file.other_id').where({ 'pagoda.status': '1', 'pagoda.monastery_id': id, 'file.type': type });
}

function deletePagodaById(id) {
    return knex('pagoda').where({ id: id }).update({ status: '0' });
}

function addPagoda(pagoda) {
    return knex('pagoda').insert(pagoda).then((result) => getAllPagodaById(result));
}

function updatePagoda(id, pagoda) {
    return knex('pagoda').where({ id: id }).update(pagoda).then((result) => getAllPagodaById(result));
}

module.exports = {
    getAllPagoda,
    getPagodaList,
    getAllPagodaById,
    getPagodaDetail,
    deletePagodaById,
    addPagoda,
    updatePagoda,
    getPagodaItemList
}