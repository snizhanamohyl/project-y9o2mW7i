import * as yup from 'yup';

export const userRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      'Only alphabets and numbers are allowed for this field'
    ),

  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .max(16, 'Password must contain 16 characters at most')
    .required('Password is required'),
});
