import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/Select';
import {
  Wrapper,
  FileWrapper,
  Container,
  Row,
  Input,
  Text,
} from './RecipeDescriptionFields.styled.js';
import Sprite from 'assets/images/sprite.svg';

import categoriesData from 'data/categories.json';

const periods = [];
for (let i = 5; i <= 120; i += 5) {
  periods.push({ value: i + ' min', label: i + ' min' });
}

export default function RecipeDescriptionFields({
  description,
  setFieldValue,
}) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [cookingTime, setCookingtime] = useState('');

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const formattedCategories = useMemo(() => {
    return categories.map(({ name }) => ({
      value: name,
      label: name,
    }));
  }, [categories]);

  return (
    <Wrapper>
      <FileWrapper>
        <input type="file" hidden />
        <svg width={64} height={64}>
          <use href={Sprite + '#icon-camera'}></use>
        </svg>
      </FileWrapper>

      <div>
        <Container>
          <Input type="text" placeholder="Enter item title" />
        </Container>
        <Container>
          <Input type="text" placeholder="Enter about recipe" />
        </Container>

        <Container>
          <Row>
            <Text>Category</Text>
            <Select
              options={formattedCategories}
              currentOption={currentCategory}
              onSelect={setCurrentCategory}
            />
          </Row>
        </Container>
        <Container>
          <Row>
            <Text>Cooking time</Text>
            <Select
              options={periods}
              currentOption={cookingTime}
              onSelect={setCookingtime}
            />
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
}

RecipeDescriptionFields.propTypes = {
  description: PropTypes.object,
  setFieldValue: PropTypes.func,
};
