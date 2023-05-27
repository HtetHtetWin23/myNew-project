const bcrypt = require('bcryptjs');

var users = [{
        id: 1,
        user_name: 'default-super-admin',
        email: 'hello@irrasoft.com',
        nric: '5/mayana(naing)181818',
        // email_confirmed: false,
        password_hash: bcrypt.hashSync('test'),
        phone_no: '09788885091',
        // phone_no_confirmed: false,
        // two_factor_enabled: false,
        created_by: 'default-super-admin',
        updated_by: 'default-super-admin'
    },
    {
        id: 2,
        user_name: 'default-admin',
        email: 'info@irrasoft.com',
        nric: '5/mayana(naing)161678',
        // email_confirmed: false,
        password_hash: bcrypt.hashSync('test'),
        phone_no: '09788885090',
        // phone_no_confirmed: false,
        // two_factor_enabled: false,
        created_by: 'default-super-admin',
        updated_by: 'default-super-admin'
    },
    {
        id: 3,
        user_name: 'default-user',
        email: 'user@irrasoft.com',
        nric: '5/mayana(naing)341567',
        //email_confirmed: false,
        password_hash: bcrypt.hashSync('test'),
        phone_no: '09788885092',
        // phone_no_confirmed: false,
        // two_factor_enabled: false,
        created_by: 'default-super-admin',
        updated_by: 'default-super-admin'
    }
];



exports.seed = function(knex, Promise) {
    return knex('user').del()

    .then(() => {
        return knex('user').insert(users);
    })
};