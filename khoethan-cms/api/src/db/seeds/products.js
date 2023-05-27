var product_data = []
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('product').del()
        .then(function() {
            // Inserts seed entries
            return knex('product').insert(product_data);
        });
};