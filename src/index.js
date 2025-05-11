
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure you have an App component to render
import './index.css'

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);