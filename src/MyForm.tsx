import * as React from 'react';
import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name='firstName'
              label='first name'
              placeholder='first name'
              component={MyField}
            />
          </div>
          <div>
            <Field
              label='Last name'
              name='lastName'
              placeholder='last name'
              component={MyField}
            />
          </div>
          <div>
            <Field
              label='email'
              name='email'
              placeholder='email'
              component={MyField}
            />
          </div>
          <Button type='submit' color='primary'>
            Submit
          </Button>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
