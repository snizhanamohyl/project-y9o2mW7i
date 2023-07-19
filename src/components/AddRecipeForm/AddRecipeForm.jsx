import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Oval } from 'react-loader-spinner';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import Button from 'components/Button/Button';
import Notification from 'components/Notification/Notification';
import { Form, Backdrop } from './AddRecipeForm.styled';
import { newRecipeSchema } from 'schemas/newRecipeSchema';
import { addRecipe } from 'services/addRecipe';

export default function AddRecipeForm() {
  const [isLoaderShown, setIsLoaderShown] = useState(false);
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
      setIsLoaderShown(true);

      try {
        const { preview, instructions, ...otherProperties } = values;

        const valueArr = instructions.split('\n');
        const formattedValue = valueArr.filter(el => el).join('\n');
        const formData = new FormData();

        formData.append('preview', preview);
        formData.append(
          'data',
          JSON.stringify({ ...otherProperties, instructions: formattedValue })
        );

        await addRecipe(formData);
        navigate('/my');
      } catch (error) {
        setError(error.message);
        setTimeout(() => {
          setError('');
        }, 4000);
      } finally {
        setIsLoaderShown(false);
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
      {error !== '' && <Notification text={error} severity="error" />}

      {isLoaderShown && (
        <Backdrop>
          <Oval
            visible
            height={75}
            width={75}
            color="var(--accent-green)"
            ariaLabel="oval-loading"
            secondaryColor="var(--accent-green)"
            strokeWidth={8}
            strokeWidthSecondary={8}
          />
        </Backdrop>
      )}
    </Form>
  );
}
