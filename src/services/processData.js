export default function processData(data = []) {
  const result = [];

  data.forEach(item => {
    const category = item.recipes[0].category;

    const existingCategory = result.find(obj => obj.category === category);

    if (existingCategory) {
      existingCategory.recipes = existingCategory.recipes.concat(item.recipes);
    } else {
      result.push({ category, recipes: item.recipes });
    }
  });

  return result;
}