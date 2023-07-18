import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import {
  Wrapper,
  InputWrapper,
  InputField,
  ListWrapper,
  List,
  Option,
  ScrollBar,
  Value,
  Placeholder,
} from './SelectInput.styled';
import { fetchIngredients } from 'services/fetchIngredients';
import Sprite from 'assets/sprite.svg';
import 'simplebar-react/dist/simplebar.min.css';

export default function SelectInput({ onSelect, inputProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const timeoutId = setTimeout(() => {
      (async () => {
        try {
          const { data } = await fetchIngredients(query);
          setIngredients(data);
        } catch (error) {
          setError(error.message);
          setTimeout(() => {
            setError('');
          }, 4000);
        }
      })();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleNextClick = ({ target }) => {
      const wrapper = target.closest(`.${InputWrapper.styledComponentId}`);

      if (wrapper) {
        return;
      }

      setIsOpen(false);
      document.removeEventListener('click', handleNextClick);
    };

    setTimeout(() => {
      document.addEventListener('click', handleNextClick);
    }, 0);
  }, [isOpen]);

  const handleSelect = ({ _id, name }) => {
    onSelect(_id);
    setCurrentIngredient(name);
  };

  return (
    <Wrapper>
      <InputWrapper type="button" onClick={() => setIsOpen(true)}>
        <InputField
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value.trim())}
          {...inputProps}
        />
        {currentIngredient ? (
          <Value>{currentIngredient}</Value>
        ) : (
          <Placeholder>Enter ingredient</Placeholder>
        )}
        <svg width={20} height={20}>
          <use href={Sprite + '#icon-down'}></use>
        </svg>
      </InputWrapper>

      {ingredients.length > 0 && (
        <ListWrapper $isOpen={isOpen}>
          <ScrollBar>
            <List>
              {ingredients.map(({ _id, name }) => (
                <Option key={_id} onClick={() => handleSelect({ _id, name })}>
                  {name}
                </Option>
              ))}
            </List>
          </ScrollBar>
        </ListWrapper>
      )}

      {error !== '' && <Notification text={error} />}
    </Wrapper>
  );
}

SelectInput.propTypes = {
  onSelect: PropTypes.func,
};

SelectInput.defaultProps = {
  onSelect: () => null,
};
