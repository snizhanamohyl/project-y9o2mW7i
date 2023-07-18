import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle/SectionTitle';
import ValidationError from 'components/ValidationError/ValidationError';
import { Section, TextArea } from './RecipePreparationFields.styled';

export default function RecipePreparationFields({ formik }) {
  const {
    handleChange,
    handleBlur,
    touched,
    errors,
    values: { instructions },
  } = formik;

  return (
    <Section>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <TextArea
        placeholder="Enter recipe"
        name="instructions"
        value={instructions}
        onChange={handleChange}
        onBlur={handleBlur}
      ></TextArea>
      {Boolean(touched.instructions && errors.instructions) && (
        <ValidationError>{errors.instructions}</ValidationError>
      )}
    </Section>
  );
}

RecipePreparationFields.propTypes = {
  formik: PropTypes.object,
};

RecipePreparationFields.defaultProps = {
  formik: {},
};
