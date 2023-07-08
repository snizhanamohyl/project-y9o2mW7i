import { useFormik } from 'formik';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields';

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
    <>
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
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
