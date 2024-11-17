import React from 'react';
import ReactDOM from 'react-dom/client';
import FormValidation from './components/FormValidation';
import './styles/FormValidation.css';

// Find the root DOM element
const rootElement = document.getElementById('root');

// Create the React root and render the component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <FormValidation />
  </React.StrictMode>
);
