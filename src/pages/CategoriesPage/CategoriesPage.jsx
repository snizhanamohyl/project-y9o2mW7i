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

import RecipesList from 'components/RecipesList/RecipesList';

export default function CategoriesPage() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  console.log('categoryName: ', categoryName);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(categoryName || '');
  console.log('value: ', value);
  const [recipeList, setRecipeList] = useState([]);
  console.log('recipeList: ', recipeList);

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
    fetchRecipesByCategory(categoryName)
      .then(data => {
        setRecipeList(data);
      })
      .catch(err => console.log(err.message));
  }, [categoryName]);

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
                {categories.map(item => {
                  return (
                    <CustomTab
                      key={item._id}
                      label={item.name}
                      value={item.name.toLowerCase()}
                    />
                  );
                })}
              </CustomTabs>
            </CustomBox>
            {categories.map(item => (
              <CustomTabPanel
                key={item._id}
                value={value}
                index={item.name.toLowerCase()}
              >
                <Conteiner>
                  <RecipesList recipe={recipeList} />
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
