const knex = require('../db/connection');

function getAllCommittee() {
    return knex.select('committee.*', 'position.name as position_name').from('committee')
        .leftJoin('position', 'committee.position_id', 'position.id').where('committee.status', '1')
}

function getAllCommitteeById(id) {

    return knex.select('committee.*', 'position.name as position_name').from('committee')
        .leftJoin('position', 'committee.position_id', 'position.id').where({ 'committee.id': id, 'committee.status': '1' }).then(result => result[0])
}

function getJoinResult(id) {
    return knex.select('committee.id', 'committee.name', 'position.name').from('committee')
        .innerJoin('position', 'committee.position_id', 'position.id').where({ 'committee.id': id })
}

function getCommitteeDeleteById(id) {
    return knex('committee').where({ id: id }).update({ status: '0' });
}

function addCommittee(committee) {
    return knex('committee').insert(committee).then((result) => getAllCommitteeById(result));
}

function updateCommittee(id, committee) {
    return knex('committee').where({ id: id }).update(committee).then((result) => getAllCommitteeById(result));
}
module.exports = {
    getAllCommittee,
    getAllCommitteeById,
    getCommitteeDeleteById,
    addCommittee,
    updateCommittee,
    getJoinResult
}