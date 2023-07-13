import Select from 'components/Select/Select';
import SelectInput from 'components/SelectInput/SelectInput';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import {
  Section,
  Row,
  Block,
  Controller,
  Ingredients,
  Item,
  InputWrapper,
  NumericInput,
  RemoveBtn,
  Value,
} from './RecipeIngredientsFields.styled';
import Sprite from 'assets/sprite.svg';
import units from 'data/units.json';

export default function RecipeIngredientsFields({ formik }) {
  const {
    setFieldValue,
    handleChange,
    handleBlur,
    touched,
    errors,
    values: { ingredients },
  } = formik;

  return (
    <Section>
      <Row>
        <SectionTitle>Ingredients</SectionTitle>
        <Block>
          <Controller type="button" $decrement>
            <svg stroke="var(--button-border-color)">
              <use href={Sprite + '#icon-minus'}></use>
            </svg>
          </Controller>
          <Value>{ingredients.length}</Value>
          <Controller type="button">
            <svg stroke="var(--accent)">
              <use href={Sprite + '#icon-plus'}></use>
            </svg>
          </Controller>
        </Block>
      </Row>

      <Ingredients>
        {ingredients.map(({ title, measure }) => (
          <Item>
            <InputWrapper>
              <SelectInput
                inputProps={{ placeholder: 'Enter ingredient', value: title }}
              />
            </InputWrapper>
            <InputWrapper>
              <NumericInput maxLength={3} />
              <Select options={units} currentOption={'tbs'} />
            </InputWrapper>
            <RemoveBtn type="button">
              <svg>
                <use href={Sprite + '#icon-X'}></use>
              </svg>
            </RemoveBtn>
          </Item>
        ))}
      </Ingredients>
    </Section>
  );
}
