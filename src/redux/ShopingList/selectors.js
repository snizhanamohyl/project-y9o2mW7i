export const shopingList = state => state.shopingList;
export const ingredientsList = state => state.ingredientsList;
export const checkedIngredientsList = state => {
  const checkedIngredientsList = state.ingradients.filter(
    ingredient => ingredient.checked
  );
  return checkedIngredientsList;
};
export const checkedIngredient = state => state.ingredients.checked;
