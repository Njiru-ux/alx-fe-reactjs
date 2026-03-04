import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        const response = await mockApiCall(values);
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

      <style jsx>{`
        .formik-form-container {
          max-width: 400px;
          margin: 2rem auto;
          padding: 2rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .registration-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-weight: bold;
          color: #333;
        }

        input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        input.error {
          border-color: #dc3545;
        }

        .error-message {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .submit-button {
          padding: 0.75rem 1.5rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #218838;
        }

        .submit-button:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }

        .submit-message {
          padding: 1rem;
          border-radius: 4px;
          text-align: center;
          margin-top: 1rem;
        }

        .submit-message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .submit-message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </div>
  );
};

export default FormikForm;