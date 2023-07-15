import { createSelector } from 'reselect';

export const getShoppingList = state => state.shoppingList;
const getIngredients = state => state.ingredients;

export const getCheckedIngredients = createSelector(
  getIngredients,
  ingredients => ingredients.filter(ingredient => ingredient.checked)
);
