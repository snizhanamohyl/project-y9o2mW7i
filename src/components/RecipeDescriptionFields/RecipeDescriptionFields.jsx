import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/Select';
import {
  Wrapper,
  FileWrapper,
  Container,
  Label,
  Row,
  Input,
  Text,
  Preview,
} from './RecipeDescriptionFields.styled.js';
import Sprite from 'assets/sprite.svg';

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
  const [cookingTime, setCookingTime] = useState('');
  const [imgUrl, setImgUrl] = useState('');

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
      <FileWrapper $isEmpty={!imgUrl}>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={({ target }) => {
            const file = target.files[0];
            if (typeof file === 'object') {
              setImgUrl(URL.createObjectURL(file));
            }
          }}
        />

        {imgUrl ? (
          <Preview src={imgUrl} alt="Preview" />
        ) : (
          <svg width={64} height={64}>
            <use href={Sprite + '#icon-add-foto'}></use>
          </svg>
        )}
      </FileWrapper>

      <div>
        <Container>
          <Label>
            <Input type="text" placeholder="Enter item title" />
          </Label>
        </Container>
        <Container>
          <Label>
            <Input type="text" placeholder="Enter about recipe" />
          </Label>
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
              onSelect={setCookingTime}
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
