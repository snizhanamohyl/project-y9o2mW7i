import { nanoid } from 'nanoid';
import {
  BtnAddFavorite,
  CheckBox,
  ContainerTimePrepare,
  Ingredients,
  IngredientsList,
  IngredientsListHead,
  Instruction,
  ListItem,
  Label,
  MainTitle,
  NameColumn,
  Quantity,
  RecipeDescription,
  RecipeInstruction,
  SectionHero,
  Title,
  InstructionItem,
  Container,
} from './RecipePage.styled';
import sprite from '../../assets/sprite.svg';
import { IngredientName } from './RecipePage.styled';
import { QuantityIngredient } from './RecipePage.styled';
import { ImageIngredient } from './RecipePage.styled';
import { CheckBoxInput } from './RecipePage.styled';
import { useState } from 'react';

export default function RecipePage({ recipeId }) {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const text =
    "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander.";
  const structureTexts = text.split(/\r\n|\r|\n/g);

  return (
    <>
      <SectionHero>
        <MainTitle>Salmon avocado salad</MainTitle>
        <RecipeDescription>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </RecipeDescription>
        <BtnAddFavorite type="button">Add to favorite recipes</BtnAddFavorite>
        <ContainerTimePrepare>
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
          <span>20 min</span>
        </ContainerTimePrepare>
      </SectionHero>

      <IngredientsListHead>
        <NameColumn>
          <Ingredients>Ingredients</Ingredients>
          <Quantity>Number</Quantity>
          <CheckBox>Add to list</CheckBox>
        </NameColumn>
        <IngredientsList>
          <ListItem>
            <ImageIngredient alt="photo ingredients" />
            <IngredientName>Avocado</IngredientName>
            <QuantityIngredient>400 g</QuantityIngredient>
            <CheckBoxInput type="checkbox" id="checkbox" />
            <Label for="checkbox"></Label>
          </ListItem>
          <ListItem>
            <ImageIngredient alt="photo ingredients" />
            <IngredientName>Avocado</IngredientName>
            <QuantityIngredient>400 g</QuantityIngredient>
            <CheckBoxInput type="checkbox" id="checkbox2" />
            <Label for="checkbox2"></Label>
          </ListItem>
        </IngredientsList>
      </IngredientsListHead>

      <RecipeInstruction>
        <div>
          <Title>Recipe Preparation</Title>
          <Instruction>
            {structureTexts.map(structureText => (
              <InstructionItem key={nanoid}>{structureText}</InstructionItem>
            ))}
          </Instruction>
        </div>
        <Container>
          <div>
            <iframe
              src="https://www.youtube.com/embed/e52IL8zYmaE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </RecipeInstruction>
    </>
  );
}
