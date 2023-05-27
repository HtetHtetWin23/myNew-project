const knex = require('../db/connection');

function getAllFestival() {

    return knex.select('festival.*').from('festival').where('festival.status', '1')
}

function getFestivalList() {
    return knex.select('festival.*', 'file.name as file_name').from('festival')
        .leftJoin('file', 'festival.id', 'file.other_id').where({ 'file.type': 'FESTIVAL', 'festival.status': '1' })
}

function getAllFestivalById(id) {
    return knex.select('festival.*').from('festival').where({ 'festival.id': id }).then(result => result[0])
}

function getFestivalDetail(id, type) {
    return knex.select('festival.*', 'file.name as file_name').from('festival')
        .leftJoin('file', 'festival.id', 'file.other_id').where({ 'festival.id': id, 'file.type': type }).then(result => result[0])
}

function deleteFestivalById(id) {
    return knex('festival').where({ id: id }).update({ status: '0' });
}

function addFestival(festival) {
    return knex('festival').insert(festival).then((result) => getAllFestivalById(result));
}

function updateFestival(id, festival) {
    return knex('festival').where({ id: id }).update(festival).then((result) => getAllFestivalById(result));
}

module.exports = {
    getAllFestival,
    getFestivalList,
    getAllFestivalById,
    getFestivalDetail,
    deleteFestivalById,
    addFestival,
    updateFestival
}