const db = require('../../db-config');


function getRecipes() {
  return db('recipe_book')
}

function getShoppingList(recipe_id) {
  return db('recipe_book')
  .where({'recipe.id': id })
}

function getInstructions(recipe_id) {

}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}