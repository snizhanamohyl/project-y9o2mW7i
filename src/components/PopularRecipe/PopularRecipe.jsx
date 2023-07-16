import { useEffect, useState } from 'react';

import SectionTitle from 'components/SectionTitle/SectionTitle';
import {
  Section,
  List,
  Item,
  StyledLink,
  Image,
  RecipeTitle,
  Description,
  FailureMessage,
} from './PopularRecipe.styled';
import useWindowWidth from 'hooks/useWindowWidth';
import { fetchPopularRecipes } from 'services/fetchPopularRecipes';

export default function PopularRecipe() {
  const [recipes, setRecipes] = useState([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    fetchPopularRecipes().then(data => setRecipes(data));
  }, []);

  const itemsCount = windowWidth >= 768 && windowWidth < 1440 ? 2 : 4;

  return (
    <Section>
      <SectionTitle>Popular recipe</SectionTitle>
      {recipes.length ? (
        <List>
          {recipes
            .slice(0, itemsCount)
            .map(({ _id, title, description, preview }) => (
              <Item key={_id}>
                <StyledLink to={`/recipe/${_id}`}>
                  <Image src={preview} alt={title} width={102} height={85} />
                  <div>
                    <RecipeTitle>{title}</RecipeTitle>
                    <Description>{description}</Description>
                  </div>
                </StyledLink>
              </Item>
            ))}
        </List>
      ) : (
        <FailureMessage>
          There are no popular recipes at the moment :(
        </FailureMessage>
      )}
    </Section>
  );
}
