import React, { useEffect, useState } from 'react';

import { CustomTabPanel } from './CustomTabsPanel';
import { Title } from './CategoriesPage.style';
import { CustomTabs, CustomTab, CustomConteiner, CustomBox } from './Tabs.style';

import categories from '../../categories.json';

export default function CategoriesPage() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = categories.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setData(sortedData);
    if (sortedData.length > 0) {
      setValue(sortedData[0]._id.$oid);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Title>Categories</Title>
      <CustomConteiner>
        <CustomBox>
          <CustomTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
            {data.map(item => (
              <CustomTab key={item._id.$oid} label={item.name} value={item._id.$oid} />
            ))}
          </CustomTabs>
        </CustomBox>
        {data.map(item => (
          <CustomTabPanel key={item._id.$oid} value={value} index={item._id.$oid}>
            {item.name}
          </CustomTabPanel>
        ))}
      </CustomConteiner>
    </>
  );
}
