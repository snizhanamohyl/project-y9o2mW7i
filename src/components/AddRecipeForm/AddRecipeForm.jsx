import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useFormik } from 'formik';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import Button from 'components/Button/Button';
import Notification from 'components/Notification/Notification';
import { Form } from './AddRecipeForm.styled';
import { newRecipeSchema } from 'schemas/newRecipeSchema';
import { addRecipe } from 'services/addRecipe';

export default function AddRecipeForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      title: '',
      category: '',
      description: '',
      time: null,
      preview: null,
      ingredients: [],
      instructions: '',
    },
    validationSchema: newRecipeSchema,
    onSubmit: async values => {
      try {
        const { preview, ...otherProperties } = values;
        const formData = new FormData();

        formData.append('preview', preview);
        formData.append('data', JSON.stringify(otherProperties));

        await addRecipe(formData);
        navigate('/my');
      } catch (error) {
        setError(error.message);
        setTimeout(() => {
          setError('');
        }, 4000);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <RecipeDescriptionFields formik={formik} />
      <RecipeIngredientsFields formik={formik} />
      <RecipePreparationFields formik={formik} />
      <Button type="submit" onClick={formik.handleSubmit}>
        Add
      </Button>
      {error !== '' && <Notification text={error} />}
    </Form>
  );
}
