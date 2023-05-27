const knex = require('../db/connection');

function getAllAnnouncement() {
    return knex('announcement').select('*').where('status', '1').orderBy('created_at', 'desc')

}

function getAllAnnouncementLimit() {
    return knex('announcement').select('*').where({ 'status': '1' }).orderBy('created_at', 'desc').limit(4);

}

function getAllAnnouncementById(id) {
    return knex('announcement').where({ id: id }).select().then((result) => result[0]);

}

function getAnnouncementDeleteById(id) {
    return knex('announcement').where({ id: id }).update({ status: '0' });
}

function addAnnouncement(announcement) {
    return knex('announcement').insert(announcement).then((result) => getAllAnnouncementById(result));
}

function updateAnnouncement(id, announcement) {
    return knex('announcement').where({ id: id }).update(announcement).then((result) => getAllAnnouncementById(result));
}
module.exports = {
    getAllAnnouncement,
    getAllAnnouncementById,
    getAnnouncementDeleteById,
    addAnnouncement,
    updateAnnouncement,
    getAllAnnouncementLimit
}