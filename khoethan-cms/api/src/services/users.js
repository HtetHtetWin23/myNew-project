const knex = require('../db/connection');
var bcrypt = require('bcryptjs');
const messageConfig = require('../config/msgConfig');

function getAllUsers() {
    return knex('user')
        .select('*').where('status', '1')
}

async function getUser(id) {
    const model = await knex('user')
        .select('*')
        .where({ 'id': parseInt(id) });
    return model[0];
}

function getUserByName(name) {
    return knex('user')
        .select('*')
        .where({ 'user_name': name })
        .first();
}

function addUser(user) {
    const hash = bcrypt.hashSync(user.password_hash, salt);
    user.password_hash = hash;
    return knex.transaction((trx) => {
            return knex('user')
                .insert({
                    user_name: user.user_name,
                    email: user.email,
                    nric: user.nric,
                    password_hash: user.password_hash,
                    phone_no: user.phone_no,
                    created_by: user.created_by,
                    updated_by: user.updated_by
                })
                .transacting(trx)
                .then((response) => {
                    if (response[0] > 0) {
                        return response[0];
                    } else {
                        throw ('error');
                    }
                })
                .then(trx.commit)
                .catch(trx.rollback)
        })
        .then((response) => {
            if (response && response == 'error') {
                return 'error';
            } else {
                console.log('getUser ', response)
                return getUser(response);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

async function updateUser(id, user) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.password_hash, salt);
    user.password_hash = hash;
    return knex('user').where('id', id).update({
        user_name: user.user_name,
        email: user.email,
        nric: user.nric,
        password_hash: user.password_hash,
        phone_no: user.phone_no,
        created_by: user.created_by,
        updated_by: user.updated_by
    }).then((result) => getUserById(id))
}

async function deleteUser(id) {
    return knex('user').where('id', id).update({
        status: '0'
    });
}

async function getUserById(id) {
    return knex.where({ id: id }).select().table('user').then((result) => result[0]);
}

async function getCurrentUser(id) {
    const model = await knex('user')
        .select('*')
        .where('id', parseInt(id));
    return model[0];

}

module.exports = {
    getAllUsers,
    getUserByName,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    getCurrentUser
};