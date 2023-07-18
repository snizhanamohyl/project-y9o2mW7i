import * as Yup from 'yup';

export const newRecipeSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .required('Title is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .required('Description is required'),
  time: Yup.number().required('Cooking time is required'),
  preview: Yup.mixed().required().required('Image is required'),
  ingredients: Yup.array()
    .of(
      Yup.object({
        id: Yup.string().required('Ingredient must have a name'),
        measure: Yup.string(),
      })
    )
    .min(1),

  instructions: Yup.string()
    .min(10, 'Instructions must be at least 10 characters')
    .required('Instructions are required'),
});
