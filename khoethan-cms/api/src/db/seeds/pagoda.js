var pagoda_data=[

]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pagoda').del()
    .then(function () {
      // Inserts seed entries
      return knex('pagoda').insert(pagoda_data);
    });
};
