
var festival_data=[

]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('festival').del()
    .then(function () {
      // Inserts seed entries
      return knex('festival').insert(festival_data);
    });
};
