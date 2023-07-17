import PropTypes from 'prop-types';

import Select from 'components/Select/Select';
import SelectInput from 'components/SelectInput/SelectInput';
import {
  Item,
  InputWrapper,
  NumericInput,
  RemoveBtn,
  ErrorMessage,
} from './Ingredient.styled';
import unitList from 'data/units.json';
import Sprite from 'assets/sprite.svg';
import { useEffect, useState } from 'react';

export default function Ingredient({ errors, onDelete, onFieldsChange }) {
  const [ingredientId, setIngredientId] = useState('');
  const [amount, setAmount] = useState(1);
  const [units, setUnits] = useState('tbs');

  useEffect(() => {
    onFieldsChange({ id: ingredientId, measure: `${amount} ${units}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredientId, amount, units]);

  return (
    <Item>
      <InputWrapper>
        <SelectInput onSelect={setIngredientId} />
      </InputWrapper>
      <InputWrapper>
        <NumericInput maxLength={3} defaultValue={1} onChange={setAmount} />
        <Select options={unitList} currentOption={units} onSelect={setUnits} />
      </InputWrapper>
      <RemoveBtn type="button" onClick={onDelete}>
        <svg>
          <use href={Sprite + '#icon-X'}></use>
        </svg>
      </RemoveBtn>
      {Boolean(errors?.id) && <ErrorMessage>{errors?.id}</ErrorMessage>}
    </Item>
  );
}

Ingredient.propTypes = {
  errors: PropTypes.array,
  onDelete: PropTypes.func,
  onFieldsChange: PropTypes.func,
};

Ingredient.defaultProps = {
  errors: [],
  onDelete: () => null,
  onFieldsChange: () => null,
};
