var productType_data = []
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('product_type').del()
        .then(function() {
            // Inserts seed entries
            return knex('product_type').insert(productType_data);
        });
};