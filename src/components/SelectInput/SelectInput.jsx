import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Label,
  InputFiled,
  ListWrapper,
  List,
  Option,
  ScrollBar,
} from './SelectInput.styled';
import Sprite from 'assets/images/sprite.svg';
import 'simplebar-react/dist/simplebar.min.css';

export default function SelectInput({ options, currentOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleNextClick = () => {
      setIsOpen(false);
      document.removeEventListener('click', handleNextClick);
    };

    setTimeout(() => {
      document.addEventListener('click', handleNextClick);
    }, 0);
  }, [isOpen]);

  const handleSelect = value => {
    onSelect(value);
  };

  return (
    <Wrapper>
      <Label type="button" onClick={() => setIsOpen(state => !state)}>
        <InputFiled type="text" />
        <svg width={20} height={20}>
          <use href={Sprite + '#icon-arrow-down'}></use>
        </svg>
      </Label>

      <ListWrapper $isOpen={isOpen}>
        <ScrollBar>
          <List>
            {options.map(({ label, value }) => (
              <Option key={value} onClick={() => handleSelect(value)}>
                {label}
              </Option>
            ))}
          </List>
        </ScrollBar>
      </ListWrapper>
    </Wrapper>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  currentOption: PropTypes.string,
  onSelect: PropTypes.func,
};

SelectInput.defaultProps = {
  options: [],
  currentOption: '',
  onSelect: () => null,
};
