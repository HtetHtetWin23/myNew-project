const knex = require('../db/connection')

function getAllPosition() {
    return knex('sms_usr').select();
}

function updateUserStatus(id, usr) {
    return knex('sms_usr').where({ id: id }).update({ status: '1', thisKeyIsSkipped: undefined })
}

function updateMemberStatus(id, member) {
    return knex('member').where({ id: id }).update({ status: '1', thisKeyIsSkipped: undefined });
}

function getJoinResult(id) {
    return knex.select('*').from('sms_usr').innerJoin('member', 'member.user_id', 'sms_usr.id').where('sms_usr.id', '=', id);
}
module.exports = {
    getAllPosition,
    updateUserStatus,
    updateMemberStatus,
    getJoinResult
}