import * as yup from 'yup';


export const userSubscribeSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email')
    .required('Email is required')
});