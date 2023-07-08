import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Button, ButtonText, List, Option } from './Select.styled';
import Sprite from 'assets/images/sprite.svg';

export default function Select({ options, currentOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Button type="button" onClick={() => setIsOpen(state => !state)}>
        <ButtonText>{currentOption ? currentOption : 'Select..'}</ButtonText>
        <svg width={20} height={20}>
          <use href={Sprite + '#icon-arrow-down'}></use>
        </svg>
      </Button>

      <List isOpen={isOpen}>
        {options.map(({ label, value }) => (
          <Option onClick={() => onSelect(value)}>{label}</Option>
        ))}
      </List>
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
