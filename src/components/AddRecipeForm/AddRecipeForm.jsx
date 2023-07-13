import { useFormik } from 'formik';
import axios from 'axios';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import Button from 'components/Button/Button';
import { Form } from './AddRecipeForm.styled';
import { newRecipeSchema } from 'schemas/newRecipeSchema';

export default function AddRecipeForm() {
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      title: '',
      category: '',
      description: '',
      time: null,
      image: null,
      ingredients: [{ title: '', measure: '' }],
      instructions: '',
    },
    validationSchema: newRecipeSchema,
    onSubmit: values => {
      const formData = new FormData();
      formData.append('data', JSON.stringify(values));
      console.log(JSON.parse(formData.get('data')));

      // axios.post('http://localhost:7777/users/avatars', formData);
      // console.log(JSON.stringify(values, null, 2));
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
    </Form>
  );
}
