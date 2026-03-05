import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormikForm.css';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

const FormikForm = () => {
  const mockApiCall = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve({ success: true, data });
        } else {
          reject(new Error('Registration failed'));
        }
      }, 1500);
    });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
      try {
        await mockApiCall(values);
        setStatus('Registration successful!');
        resetForm();
      } catch (error) {
        setStatus('Registration failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="formik-form-container">
      <h2>User Registration (Formik + Yup)</h2>
      
      <form onSubmit={formik.handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={
              formik.touched.username && formik.errors.username ? 'error' : ''
            }
            placeholder="Enter your username"
          />
          {formik.touched.username && formik.errors.username && (
            <span className="error-message">{formik.errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={
              formik.touched.email && formik.errors.email ? 'error' : ''
            }
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password ? 'error' : ''
            }
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </div>

        <button 
          type="submit" 
          disabled={formik.isSubmitting}
          className="submit-button"
        >
          {formik.isSubmitting ? 'Registering...' : 'Register'}
        </button>

        {formik.status && (
          <div className={`submit-message ${formik.status.includes('successful') ? 'success' : 'error'}`}>
            {formik.status}
          </div>
        )}
      </form>
    </div>
  );
};

export default FormikForm;