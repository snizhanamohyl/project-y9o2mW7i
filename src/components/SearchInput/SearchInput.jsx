import { Formik } from 'formik';
import { Form, Button, Input } from './SearchInput.styled';

export const SearchInput = () => {
  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Input
          id="search"
          name="search"
          placeholder="Type your request"
          type="text"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Formik>
  );
};
