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
import {
  fetchRecipesByCategory,
  fetchCategoriesList,
} from 'services/categories-api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

export default function CategoriesPage() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(categoryName || '');
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetchCategoriesList()
      .then(data => {
        const sortedData = data.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setCategories(sortedData);
      })
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    fetchRecipesByCategory(value)
      .then(data => {
        setRecipeList(data);
      })
      .catch(err => console.log(err.message));
  }, [value]);

  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategory = categoryName || categories[0].name;
      setValue(defaultCategory);
      navigate(`/categories/${defaultCategory}`);
    }
  }, [categoryName, navigate, categories]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
  };

  return (
    <SharedContainer>
      {categories.length > 0 ? (
        <>
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
                {categories.map(item => (
                  <CustomTab
                    key={item._id.$oid}
                    label={item.name}
                    value={item.name}
                  />
                ))}
              </CustomTabs>
            </CustomBox>
            {categories.map(item => (
              <CustomTabPanel
                key={item._id.$oid}
                value={value}
                index={item.name}
              >
                <Conteiner>
                  {recipeList.map(recipe => (
                    <RecipeCard recipe={recipe} />
                  ))}
                </Conteiner>
              </CustomTabPanel>
            ))}
          </CustomConteiner>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </SharedContainer>
  );
}

// useEffect(() => {
//   const fetchRecipes = async () => {
//     try {
//       const data = await fetchRecipesByCategory(value);
//       setRecipeList(data);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   fetchRecipes();
// }, [value]);
