import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle/SectionTitle';
import { Section, TextArea } from './RecipePreparationFields.styled';

export default function RecipePreparationFields({
  preparation,
  setFieldValue,
}) {
  const handleChange = ({ target }) => {
    const values = target.value.split('\n');
    const filteredValues = values.filter(
      (el, index, arr) =>
        el || index === arr.length - 1 || index === arr.length - 2
    );
    setFieldValue('preparation', filteredValues);
  };

  return (
    <Section>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <TextArea
        placeholder="Enter recipe"
        value={preparation.join('\n')}
        onChange={handleChange}
      ></TextArea>
    </Section>
  );
}

RecipePreparationFields.propTypes = {
  preparation: PropTypes.arrayOf(PropTypes.string),
  setFieldValue: PropTypes.func,
};

RecipePreparationFields.defaultProps = {
  preparation: [],
  setFieldValue: () => null,
};
