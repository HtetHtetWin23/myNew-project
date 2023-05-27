var announce_data = [

]
exports.seed = function(knex, Promise) {
    return knex('announcement').del()
        .then(function() {
            return knex('announcement').insert(announce_data);

        });
};