export const shopingList = state => state.shopingList;
const checkedIngredientsList = state => {
  const checkedIngredientsList = state.ingradients.filter(
    ingredient => ingredient.cheed
  );
  return checkedIngredientsList;
};
export const checkedIngredient = state => state.ingredients.checked;
