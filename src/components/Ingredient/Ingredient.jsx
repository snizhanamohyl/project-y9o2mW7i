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
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState('tbs');

  useEffect(() => {
    onFieldsChange({ title, measure: `${amount} ${units}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, amount, units]);

  return (
    <Item>
      <InputWrapper>
        <SelectInput
          options={unitList}
          currentOption={title}
          inputProps={{ placeholder: 'Enter ingredient' }}
          onSelect={setTitle}
        />
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
      {Boolean(errors?.title) && <ErrorMessage>{errors?.title}</ErrorMessage>}
    </Item>
  );
}
