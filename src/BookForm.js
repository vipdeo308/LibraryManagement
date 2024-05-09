import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const BookForm = () => {
  const initialValues = {
    title: '',
    author: '',
    genre: '',
    isbn: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    genre: Yup.string(),
    isbn: Yup.string().required('ISBN is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission (e.g., send data to backend)
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <table border="1">  
                <tr>
                    <td><label>Title:</label></td>
                    <td>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="div" />
                    </td>
                </tr>
                <tr>
                    <td><label>Author:</label></td>
                    <td>
                        <Field type="text" name="author" />
                        <ErrorMessage name="author" component="div" />
                    </td>
                </tr>
                <tr>
                    <td><label>Genre:</label></td>
                    <td>
                        <Field type="text" name="genre" />
                        <ErrorMessage name="genre" component="div" />
                    </td>
                </tr>
                <tr>
                    <td><label>ISBN:</label></td>
                    <td>
                        <Field type="text" name="isbn" />
                        <ErrorMessage name="isbn" component="div" />
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
