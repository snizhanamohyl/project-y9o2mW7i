import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ThreeDots } from 'react-loader-spinner';
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
  FailureMessage,
} from './SelectInput.styled';
import { fetchIngredients } from 'services/fetchIngredients';
import Sprite from 'assets/sprite.svg';
import 'simplebar-react/dist/simplebar.min.css';

export default function SelectInput({ onSelect, inputProps }) {
  const [isLoaderShown, setIsLoaderShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsLoaderShown(true);

      (async () => {
        try {
          const { data } = await fetchIngredients(query);
          setIngredients(data);
        } catch (error) {
          setIngredients([]);
          console.log(error.message);
        } finally {
          setIsLoaderShown(false);
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

      <ListWrapper $isOpen={isOpen}>
        {isLoaderShown ? (
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="var(--select-options-hover)"
            ariaLabel="three-dots-loading"
            visible
          />
        ) : ingredients.length > 0 ? (
          <ScrollBar>
            <List>
              {ingredients.map(({ _id, name }) => (
                <Option key={_id} onClick={() => handleSelect({ _id, name })}>
                  {name}
                </Option>
              ))}
            </List>
          </ScrollBar>
        ) : (
          query && <FailureMessage>Nothing was found :(</FailureMessage>
        )}
      </ListWrapper>
    </Wrapper>
  );
}

SelectInput.propTypes = {
  onSelect: PropTypes.func,
};

SelectInput.defaultProps = {
  onSelect: () => null,
};
