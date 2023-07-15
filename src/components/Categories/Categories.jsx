import { useNavigate, useParams } from 'react-router';
import { CustomConteiner } from './Categories.style';
import { useEffect, useState } from 'react';
import {
  fetchRecipesByCategory,
  fetchCategoriesList,
} from 'services/categories-api';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import CategoriesTabs from 'components/CategoriesTabs/CaregoriesTabs';

export default function Categories() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(
    categoryName === ':categoryName'
      ? localStorage.getItem('defaultCategory')
      : categoryName || ''
  );
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetchCategoriesList()
      .then(data => {
        const sortedData = data.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setCategories(sortedData);
        localStorage.setItem(
          'defaultCategory',
          sortedData[0].name.toLowerCase()
        );

        if (categoryName) {
          const categoryExists = sortedData.find(
            category =>
              category.name.toLowerCase() === categoryName.toLowerCase()
          );
          if (!categoryExists) {
            navigate(`/categories/${localStorage.getItem('defaultCategory')}`);
          }
        }
      })
      .catch(err => console.log(err.message));
  }, [categoryName, navigate]);

  useEffect(() => {
    if (categoryName === ':categoryName') {
      return;
    } else if (categoryName) {
      fetchRecipesByCategory(categoryName)
        .then(data => {
          setRecipeList(data);
        })
        .catch(err => console.log(err.message));
    }
  }, [categoryName]);

  useEffect(() => {
    if (categories.length > 0) {
      const category = categoryName || localStorage.getItem('defaultCategory');
      setValue(category);
      navigate(`/categories/${category}`);
    }
  }, [categoryName, navigate, categories]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
  };

  return categories.length > 0 ? (
    <CustomConteiner>
      <CategoriesTabs
        categories={categories}
        value={value}
        handleChange={handleChange}
      />
      <CategoriesList
        categories={categories}
        recipeList={recipeList}
        value={value}
      />
    </CustomConteiner>
  ) : (
    <div>Loading...</div>
  );
}
