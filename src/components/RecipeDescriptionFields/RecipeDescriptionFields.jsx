import PropTypes from 'prop-types';

import {
  Wrapper,
  FileWrapper,
  InputWrapper,
  Input,
} from './RecipeDescriptionFields.styled.js';
import Sprite from 'assets/images/sprite.svg';

export default function RecipeDescriptionFields({
  description,
  setFieldValue,
}) {
  return (
    <Wrapper>
      <FileWrapper>
        <input type="file" hidden />
        <svg width={64} height={64}>
          <use href={Sprite + '#icon-camera'}></use>
        </svg>
      </FileWrapper>

      <InputWrapper>
        <Input type="text" placeholder="Enter item title" />
      </InputWrapper>

      <InputWrapper>
        <Input type="text" placeholder="Enter about recipe" />
      </InputWrapper>
    </Wrapper>
  );
}

RecipeDescriptionFields.propTypes = {
  description: PropTypes.object,
  setFieldValue: PropTypes.func,
};
