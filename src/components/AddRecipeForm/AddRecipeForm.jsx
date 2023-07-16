import { useFormik } from 'formik';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import Button from 'components/Button/Button';
import { Form } from './AddRecipeForm.styled';
import { newRecipeSchema } from 'schemas/newRecipeSchema';
import { addRecipe } from 'services/addRecipe';

export default function AddRecipeForm() {
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
    onSubmit: values => {
      const { preview, ...otherProperties } = values;
      const formData = new FormData();

      formData.append('preview', preview);
      formData.append('data', JSON.stringify(otherProperties));

      addRecipe(formData);
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
