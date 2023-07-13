import SharedContainer from 'components/SharedContainer/SharedContainer';

import { useNavigate, useParams } from 'react-router';
import {
  CustomConteiner,
  CustomTab,
  CustomTabs,
  CustomBox,
} from './Tabs.style';
import { CustomTabPanel } from './CustomTabsPanel';
import { useEffect, useState } from 'react';
import { Title, Conteiner } from './CategoriesPage.style';
import { fetchRecipesByCategory } from 'services/categories-api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

import categories from '../../categories';

export default function CategoriesPage() {
  const { categoryName } = useParams();
  console.log('categoryName: ', categoryName);
  const navigate = useNavigate();

  const [value, setValue] = useState(categoryName || '');
  console.log('value: ', value);
  const [data, setData] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  console.log('recipeList: ', recipeList);

  useEffect(() => {
    const sortedData = categories.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setData(sortedData);

    const defaultCategory = categoryName || sortedData[0].name;
    setValue(defaultCategory);
    navigate(`/categories/${defaultCategory}`);
  }, [categoryName, navigate]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await fetchRecipesByCategory(value);
        setRecipeList(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchRecipes();
  }, [value]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
  };

  return (
    <SharedContainer>
      <Title>Categories</Title>
      <CustomConteiner>
        <CustomBox>
          <CustomTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            {data.map(item => (
              <CustomTab
                key={item._id.$oid}
                label={item.name}
                value={item.name}
              />
            ))}
          </CustomTabs>
        </CustomBox>
        {data.map(item => (
          <CustomTabPanel key={item._id.$oid} value={value} index={item.name}>
            <Conteiner>
              {recipeList.map(recipe => (
                <RecipeCard recipe={recipe} />
              ))}
            </Conteiner>
          </CustomTabPanel>
        ))}
      </CustomConteiner>
    </SharedContainer>
  );
}
