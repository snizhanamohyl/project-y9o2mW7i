import * as yup from 'yup';

export const userSigninSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must contain at least 8 characters')
    .max(16, 'Password must contain 16 characters at most')
    .required('Password is required'),
});