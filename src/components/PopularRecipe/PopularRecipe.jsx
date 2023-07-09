import {
  Section,
  List,
  Item,
  Image,
  RecipeTitle,
  Description,
} from './PopularRecipe.styled';

import recipesData from 'data/recipes.json';

export default function PopularRecipe() {
  return (
    <Section>
      <h1>PopularRecipe</h1>
      <List>
        {recipesData.slice(0, 4).map(({ _id, title, description, preview }) => (
          <Item
            key={_id.$oid}
            onClick={() => console.log('navigate to ' + _id.$oid)}
          >
            <Image src={preview} alt={title} width={104} height={85} />
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
