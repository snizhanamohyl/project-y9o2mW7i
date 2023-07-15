import { CustomTab, CustomTabs, CustomBox } from './CategoriesTabs.style';

export default function CategoriesTabs({ value, categories, handleChange }) {
  return (
    <CustomBox>
      <CustomTabs
        value={value ? value : 'beef'}
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
  );
}
