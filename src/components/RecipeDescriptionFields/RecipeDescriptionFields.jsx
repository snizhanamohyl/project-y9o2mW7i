import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/Select/Select';
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
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleFileChange = ({ target }) => {
    const file = target.files[0];

    if (typeof file === 'object') {
      setFieldValue('description.img', file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const formattedCategories = useMemo(() => {
    return categories.map(({ name }) => ({
      value: name,
      label: name,
    }));
  }, [categories]);

  const { title, about, category, cookingTime } = description;

  return (
    <Wrapper>
      <FileWrapper $isEmpty={!imgUrl}>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
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
            <Input
              type="text"
              placeholder="Enter item title"
              value={title}
              onChange={({ target }) =>
                setFieldValue('description.title', target.value)
              }
            />
          </Label>
        </Container>
        <Container>
          <Label>
            <Input
              type="text"
              placeholder="Enter about recipe"
              value={about}
              onChange={({ target }) =>
                setFieldValue('description.about', target.value)
              }
            />
          </Label>
        </Container>

        <Container>
          <Row>
            <Text>Category</Text>
            <Select
              options={formattedCategories}
              currentOption={category}
              onSelect={value => setFieldValue('description.category', value)}
            />
          </Row>
        </Container>
        <Container>
          <Row>
            <Text>Cooking time</Text>
            <Select
              options={periods}
              currentOption={cookingTime}
              onSelect={value =>
                setFieldValue('description.cookingTime', value)
              }
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
