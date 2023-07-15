export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const TOGGLE_INGREDIENT_CHECKED = 'TOGGLE_INGREDIENT_CHECKED';
export const ADD_TO_SHOPPING_LIST = 'ADD_TO_SHOPPING_LIST';
export const REMOVE_FROM_SHOPPING_LIST = 'REMOVE_FROM_SHOPPING_LIST';

export const toggleIngredientChecked = ingredientId => ({
  type: TOGGLE_INGREDIENT_CHECKED,
  payload: ingredientId,
});

export const addToShoppingList = ingredient => ({
  type: ADD_TO_SHOPPING_LIST,
  payload: ingredient,
});

export const removeFromShoppingList = ingredientId => ({
  type: REMOVE_FROM_SHOPPING_LIST,
  payload: ingredientId,
});
