
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'John', description: 'Some Project', completed: 'true'},
        { name: 'Jake', description: 'Another Project', completed: 'false'},
        { name: 'James', description: 'The Project', completed: 'true'}
      ]);
    });
};
