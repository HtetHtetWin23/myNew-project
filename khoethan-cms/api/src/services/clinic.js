const knex = require('../db/connection');

function getAllClinic() {

    return knex.select('clinic_staff.*', 'position.name as position_name').from('clinic_staff')
        .leftJoin('position', 'clinic_staff.position_id', 'position.id').where('clinic_staff.status', '1')
}

function getClinicList() {
    return knex.select('clinic_staff.*', 'file.name as file_name').from('clinic_staff')
        .leftJoin('file', 'clinic_staff.id', 'file.other_id').where({ 'file.type': 'CLINIC' })
}

function getAllClinicById(id) {
    return knex.select('clinic_staff.*', 'position.name as position_name').from('clinic_staff')
        .leftJoin('position', 'clinic_staff.position_id', 'position.id')
        .where({ 'clinic_staff.id': id }).then(result => result[0])
}

function getClinicDetail(id, type) {
    return knex.select('clinic_staff.*', 'file.name as file_name').from('clinic_staff')
        .leftJoin('file', 'clinic_staff.id', 'file.other_id').where({ 'clinic_staff.id': id, 'file.type': type }).then(result => result[0])
}

function getClinicDeleteById(id) {
    return knex('clinic_staff').where({ id: id }).update({ status: '0' });
}

function addClinic(clinic) {
    return knex('clinic_staff').insert(clinic).then((result) => getAllClinicById(result));
}

function updateClinic(id, clinic) {
    return knex('clinic_staff').where({ id: id }).update(clinic).then((result) => getAllClinicById(result));
}

module.exports = {
    getAllClinic,
    getClinicList,
    getAllClinicById,
    getClinicDetail,
    getClinicDeleteById,
    addClinic,
    updateClinic
}