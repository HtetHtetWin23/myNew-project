var position_data = [

]
exports.seed = function(knex, Promise) {
    return knex('position').del()
        .then(function() {
            // Inserts seed entries
            return knex('position').insert(position_data);
        });
}