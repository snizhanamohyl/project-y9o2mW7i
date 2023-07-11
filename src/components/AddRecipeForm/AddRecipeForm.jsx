import { useFormik } from 'formik';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import { Form } from './AddRecipeForm.styled';

export default function AddRecipeForm() {
  const formik = useFormik({
    initialValues: {
      description: {
        title: '',
        img: 'file',
        about: '',
        category: '',
        cookingTime: 0,
      },
      ingredients: [{ title: '', unit: 'g', amount: 1 }],
      preparation: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    handleSubmit,
    setFieldValue,
    values: { description, ingredients, preparation },
  } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        description={description}
        setFieldValue={setFieldValue}
      />
      <RecipeIngredientsFields
        ingredients={ingredients}
        setFieldValue={setFieldValue}
      />
      <RecipePreparationFields
        preparation={preparation}
        setFieldValue={setFieldValue}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ padding: '10px', color: 'white', backgroundColor: 'black' }}
      >
        Add
      </button>
    </Form>
  );
}
