import { CustomTabPanel } from './CustomTabsPanel';
import RecipesList from 'components/RecipesList/RecipesList';
import { Conteiner } from './CategoriesList.style';

export default function CategoriesList({ value, categories, recipeList }) {
  return categories.map(item => (
    <CustomTabPanel
      key={item._id}
      value={value}
      index={item.name.toLowerCase()}
    >
      <Conteiner>
        <RecipesList recipes={recipeList} />
      </Conteiner>
    </CustomTabPanel>
  ));
}
