import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CustomTabPanel } from './CustomTabsPanel';
import { Title } from './CategoriesPage.style';
import { CustomTabs, CustomTab, CustomConteiner, CustomBox } from './Tabs.style';

import categories from '../../categories.json';

export default function CategoriesPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState(categoryName || '');
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = categories.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setData(sortedData);
    if (sortedData.length > 0) {
      const defaultCategory = categoryName || sortedData[0].name;
      setValue(defaultCategory);
      navigate(`/categories/${defaultCategory}`);
    }
  }, [categoryName, navigate]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
  };

  return (
    <>
      <Title>Categories</Title>
      <CustomConteiner>
        <CustomBox>
          <CustomTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
            {data.map(item => (
              <CustomTab key={item._id.$oid} label={item.name} value={item.name} />
            ))}
          </CustomTabs>
        </CustomBox>
        {data.map(item => (
          <CustomTabPanel key={item._id.$oid} value={value} index={item.name}>
            {item.name}
          </CustomTabPanel>
        ))}
      </CustomConteiner>
    </>
  );
}
