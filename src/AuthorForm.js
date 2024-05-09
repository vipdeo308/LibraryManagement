import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const AuthorForm = () => {
  const initialValues = {
    name: '',
    birthdate: '',
    bio: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Author name is required'),
    birthdate: Yup.date().required('Birthdate is required'),
    bio: Yup.string(),
  });

  const handleSubmit = (values) => {
    // Handle form submission (e.g., send data to backend)
    console.log('Submitted author details:', values);
  };

  return (
    <div>
      <h2>Manage Authors</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
            <table border="1">  
                <tr>
                    <td><label>Name:</label></td>
                    <td>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </td>
                </tr>
                <tr>
                    <td><label>Birthdate:</label></td>
                    <td>
                        <Field type="date" name="birthdate" />
                        <ErrorMessage name="birthdate" component="div" />
                    </td>
                </tr>
                <tr>
                    <td><label>Bio:</label></td>
                    <td>
                        <Field as="textarea" name="bio" />
                        <ErrorMessage name="bio" component="div" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><button type="submit">Submit</button></td>
                </tr>
            </table>
        </Form>
      </Formik>
    </div>
  );
};
