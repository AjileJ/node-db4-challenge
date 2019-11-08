
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_steps').insert([
        {id: 1, recipeingredients_id: 1, instructions: 'Make sure you grab two buns', steps: 1},
        {id: 1, recipeingredients_id: 2, instructions: 'Second cook the meat and season it', steps: 2},
        {id: 1, recipeingredients_id: 3, instructions: 'Third throw a piece of cheese on the patty', steps: 3},
        {id: 1, recipeingredients_id: 4, instructions: 'Fourth, put one slice of tomato on the cheese', steps: 4},
        {id: 1, recipeingredients_id: 5, instructions: 'Fifth, put the lettuce on the tomato', steps: 5},
      ]);
    });
};
