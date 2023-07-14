export const shopingList = state => state.shopingList;
const checkedIngredientsList = state => {
  const completedTodos = state.ingradients.filter(ingredient => ingredient.cheed)
  return completedTodos.length
}
export const checkedIngredient = state => state.ingredients.checked