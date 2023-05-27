var post_data = []
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('post').del()
        .then(function() {
            // Inserts seed entries
            return knex('post').insert(post_data);
        });
};