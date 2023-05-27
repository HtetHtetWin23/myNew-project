var slider_data = [

]
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('slider').del()
        .then(function() {
            // Inserts seed entries
            return knex('slider').insert(slider_data);
        });
};