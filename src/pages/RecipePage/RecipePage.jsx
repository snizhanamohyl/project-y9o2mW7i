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

export default function RecipePage({ recipeId }) {
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
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_264_738)">
              <path
                d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z"
                stroke="#23262A"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="#23262A"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_264_738">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
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
            <image alt="photo ingredients" />
            <p>Avocado</p>
            <p>400 g</p>
            <input type="checkbox" />
          </ListItem>
          <ListItem>
            <image alt="photo ingredients" />
            <p>Avocado</p>
            <p>400 g</p>
            <input type="checkbox" />
          </ListItem>
        </IngredientsList>
      </IngredientsListHead>

      <RecipeInstruction>
        <Title>Recipe Preparation</Title>
        <Instruction>
          {structureTexts.map(structureText => (
            <InstructionItem key={nanoid}>{structureText}</InstructionItem>
          ))}
        </Instruction>
        <Container>
          <iframe
            width="343"
            height="250"
            src="https://www.youtube.com/embed/e52IL8zYmaE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Container>
      </RecipeInstruction>
    </>
  );
}
