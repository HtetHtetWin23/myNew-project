var school_data = []
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('school').del()
        .then(function() {
            // Inserts seed entries
            return knex('school').insert(school_data);
        });
};