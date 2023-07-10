import SectionTitle from 'components/SectionTitle';
import {
  Section,
  List,
  Item,
  Image,
  RecipeTitle,
  Description,
} from './PopularRecipe.styled';

import recipesData from 'data/recipes.json';
import { useEffect, useState } from 'react';

export default function PopularRecipe() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const itemsCount = windowWidth >= 768 && windowWidth < 1440 ? 2 : 4;

  return (
    <Section>
      <SectionTitle>PopularRecipe</SectionTitle>
      <List>
        {recipesData
          .slice(0, itemsCount)
          .map(({ _id, title, description, preview }) => (
            <Item
              key={_id.$oid}
              onClick={() => console.log('navigate to ' + _id.$oid)}
            >
              <Image src={preview} alt={title} width={102} height={85} />
              <div>
                <RecipeTitle>{title}</RecipeTitle>
                <Description>{description}</Description>
              </div>
            </Item>
          ))}
      </List>
    </Section>
  );
}
