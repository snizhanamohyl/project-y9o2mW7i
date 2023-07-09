import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Button,
  ButtonText,
  ListWrapper,
  List,
  Option,
  ScrollBar,
} from './Select.styled';
import Sprite from 'assets/images/sprite.svg';
import 'simplebar-react/dist/simplebar.min.css';

export default function Select({ options, currentOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClick = ({ target }) => {
      const clickedList = target.closest(`.${List.styledComponentId}`);
      if (!clickedList) {
        setIsOpen(false);
        document.removeEventListener('click', handleClick);
      }
    };

    setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);
  }, [isOpen]);

  return (
    <Wrapper>
      <Button type="button" onClick={() => setIsOpen(state => !state)}>
        <ButtonText>{currentOption ? currentOption : 'Select..'}</ButtonText>
        <svg width={20} height={20}>
          <use href={Sprite + '#icon-arrow-down'}></use>
        </svg>
      </Button>

      <ListWrapper $isOpen={isOpen}>
        <ScrollBar>
          <List>
            {options.map(({ label, value }) => (
              <Option key={value} onClick={() => onSelect(value)}>
                {label}
              </Option>
            ))}
          </List>
        </ScrollBar>
      </ListWrapper>
    </Wrapper>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  currentOption: PropTypes.string,
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  currentOption: '',
  onSelect: () => null,
};
