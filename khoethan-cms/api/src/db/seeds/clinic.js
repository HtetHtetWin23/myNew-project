var clinic_data = [

]
exports.seed = function(knex, Promise) {
    return knex('clinic_staff').del()
        .then(function() {
            return knex('clinic_staff').insert(clinic_data);

        });
};