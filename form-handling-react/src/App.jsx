import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Handling in React</h1>
        <p>Controlled Components vs Formik</p>
      </header>
      
      <main className="App-main">
        <div className="forms-container">
          <RegistrationForm />
          <FormikForm />
        </div>
      </main>
    </div>
  );
}

export default App;