import * as yup from 'yup';

export const userSigninSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required'),
});
