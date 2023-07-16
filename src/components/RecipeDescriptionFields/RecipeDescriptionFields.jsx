import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/Select/Select';
import ValidationError from 'components/ValidationError/ValidationError';
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
  periods.push({ value: i, label: i + ' min' });
}

export default function RecipeDescriptionFields({ formik }) {
  const [categories, setCategories] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const {
    setFieldValue,
    handleChange,
    handleBlur,
    touched,
    errors,
    values: { title, category, description, time },
  } = formik;

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleFileChange = ({ target }) => {
    const file = target.files[0];

    if (typeof file === 'object') {
      setFieldValue('preview', file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const formattedCategories = useMemo(() => {
    return categories.map(({ name }) => ({
      value: name,
      label: name,
    }));
  }, [categories]);

  const getErrorMessageMarkup = field => {
    return (
      Boolean(touched[field] && errors[field]) && (
        <ValidationError>{errors[field]}</ValidationError>
      )
    );
  };

  return (
    <Wrapper>
      <FileWrapper $isEmpty={!imgUrl}>
        <input
          type="file"
          name="preview"
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

        {getErrorMessageMarkup('preview')}
      </FileWrapper>

      <div>
        <Container>
          <Label>
            <Input
              type="text"
              name="title"
              placeholder="Enter item title"
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Label>
          {getErrorMessageMarkup('title')}
        </Container>
        <Container>
          <Label>
            <Input
              type="text"
              name="description"
              placeholder="Enter about recipe"
              value={description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Label>
          {getErrorMessageMarkup('description')}
        </Container>

        <Container>
          <Row>
            <Text>Category</Text>
            <Select
              options={formattedCategories}
              currentOption={category}
              onSelect={value => setFieldValue('category', value)}
            />
          </Row>
          {getErrorMessageMarkup('category')}
        </Container>
        <Container>
          <Row>
            <Text>Cooking time</Text>
            <Select
              options={periods}
              currentOption={time}
              onSelect={value => setFieldValue('time', value)}
            />
          </Row>
          {getErrorMessageMarkup('time')}
        </Container>
      </div>
    </Wrapper>
  );
}

RecipeDescriptionFields.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  setFieldValue: PropTypes.func,
};

RecipeDescriptionFields.defaultProps = {
  title: '',
  category: '',
  description: '',
  time: 0,
  setFieldValue: () => null,
};
