import Select from 'components/Select';
import SelectInput from 'components/SelectInput';
import SectionTitle from 'components/SectionTitle';
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
} from './RecipeIngredientsFields.styled';
import Sprite from 'assets/sprite.svg';
import units from 'data/units.json';

export default function RecipeIngredientsFields() {
  return (
    <Section>
      <Row>
        <SectionTitle>Ingredients</SectionTitle>
        <Block>
          <Controller type="button">
            <svg stroke="var(--button-border-color)">
              <use href={Sprite + '#icon-minus'}></use>
            </svg>
          </Controller>
          <span>0</span>
          <Controller type="button">
            <svg stroke="var(--accent)">
              <use href={Sprite + '#icon-plus'}></use>
            </svg>
          </Controller>
        </Block>
      </Row>

      <Ingredients>
        <Item>
          <InputWrapper>
            <SelectInput placeholder="Enter ingredient" />
          </InputWrapper>
          <InputWrapper>
            <NumericInput maxLength={3} />
            <Select options={units} />
          </InputWrapper>
          <RemoveBtn type="button">
            <svg stroke="var(--black)">
              <use href={Sprite + '#icon-X'}></use>
            </svg>
          </RemoveBtn>
        </Item>
      </Ingredients>
    </Section>
  );
}
