var committee_data = [

]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('committee').del()
    .then(function () {
      // Inserts seed entries
      return knex('committee').insert(committee_data);
    });
};
