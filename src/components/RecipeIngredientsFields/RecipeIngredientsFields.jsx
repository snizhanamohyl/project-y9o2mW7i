import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Ingredient from 'components/Ingredient/Ingredient';
import {
  Section,
  Row,
  Block,
  Controller,
  Value,
  Ingredients,
} from './RecipeIngredientsFields.styled';
import Sprite from 'assets/sprite.svg';
import { useCallback, useEffect } from 'react';

export default function RecipeIngredientsFields({ formik }) {
  const {
    setFieldValue,
    errors,
    values: { ingredients },
  } = formik;

  const onIncrease = useCallback(() => {
    const newIngredients = [...ingredients];

    newIngredients.push({ title: '', measure: '', key: nanoid() });
    setFieldValue('ingredients', newIngredients);
  }, [ingredients, setFieldValue]);

  useEffect(() => {
    if (ingredients.length < 1) {
      onIncrease();
    }
  }, [onIncrease, ingredients.length]);

  const onDecrease = useCallback(() => {
    const newIngredients = [...ingredients];

    newIngredients.pop();
    setFieldValue('ingredients', newIngredients);
  }, [ingredients, setFieldValue]);

  const onFieldsChange = useCallback(
    key => {
      return value => {
        const newIngredients = [...ingredients];
        const index = newIngredients.findIndex(item => {
          return item.key === key;
        });

        newIngredients[index] = { key, ...value };
        setFieldValue('ingredients', newIngredients);
      };
    },
    [ingredients, setFieldValue]
  );

  const onDelete = useCallback(
    key => {
      if (ingredients.length < 2) {
        return;
      }

      const newIngredients = ingredients.filter(item => item.key !== key);
      setFieldValue('ingredients', newIngredients);
    },
    [ingredients, setFieldValue]
  );

  return (
    <Section>
      <Row>
        <SectionTitle>Ingredients</SectionTitle>
        <Block>
          <Controller
            type="button"
            disabled={ingredients.length < 2}
            $decrement
            onClick={onDecrease}
          >
            <svg stroke="var(--button-border-color)">
              <use href={Sprite + '#icon-minus'}></use>
            </svg>
          </Controller>
          <Value>{ingredients.length}</Value>
          <Controller type="button" onClick={onIncrease}>
            <svg stroke="var(--accent)">
              <use href={Sprite + '#icon-plus'}></use>
            </svg>
          </Controller>
        </Block>
      </Row>

      <Ingredients>
        {ingredients.map(({ key, title, measure }, index) => (
          <Ingredient
            key={key}
            title={title}
            measure={measure}
            errors={errors.ingredients?.[index]}
            setFieldValue={setFieldValue}
            onDelete={() => onDelete(key)}
            onFieldsChange={onFieldsChange(key)}
          />
        ))}
      </Ingredients>
    </Section>
  );
}

RecipeIngredientsFields.propTypes = {
  formik: PropTypes.object,
};

RecipeIngredientsFields.defaultProps = {
  formik: {},
};
