const db = require("../../../db-config");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipe_book');
}

// function getRecipesById(id) {
//   return db('recipe_book')
//   .where(, id);
// }

