const db = require("../../../db-config");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  console.log(id);
  return db('recipes_ingredients as ri')
  .join('ingredients as i', 'ri.ingredients_id', 'i.id')
  .where("ri.recipe_id",'=', id )
  .select('i.name', 'ri.quantity', 'ri.amount') 
}

function getInstructions(id) {
  return db('recipe_steps')
  .join('recipes', 'recipe_steps.recipes_id', 'recipes.id')
  .where('recipe.id', '=', id)
  .select('recipe_steps.steps', 'recipe_steps.instructions')
}



