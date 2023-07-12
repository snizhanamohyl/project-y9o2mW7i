import SectionTitle from 'components/SectionTitle/SectionTitle';
import {
  Section,
  List,
  Item,
  Image,
  RecipeTitle,
  Description,
} from './PopularRecipe.styled';
import useWindowWidth from 'hooks/useWindowWidth';

import recipesData from 'data/recipes.json';

export default function PopularRecipe() {
  const windowWidth = useWindowWidth();

  const itemsCount = windowWidth >= 768 && windowWidth < 1440 ? 2 : 4;

  return (
    <Section>
      <SectionTitle>Popular recipe</SectionTitle>
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
