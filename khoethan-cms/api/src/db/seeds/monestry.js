var monestry_data = [

]
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('monastery').del()
        .then(function() {
            // Inserts seed entries
            return knex('monastery').insert(monestry_data);
        });
};