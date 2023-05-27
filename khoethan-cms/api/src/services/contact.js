const knex = require('../db/connection');

function getAllContact() {
    return knex('contact').select('*').where('status', '1');
}

function getAllContactById(id) {
    return knex('contact').where({ id: id }).select().then((result) => result[0]);
}

function getContactDeleteById(id) {
    return knex('contact').where({ id: id }).update({ status: '0' });
}

function addContact(contact) {
    return knex('contact').insert(contact).then((result) => getAllContactById(result));
}

module.exports = {
    getAllContact,
    getAllContactById,
    getContactDeleteById,
    addContact,

};