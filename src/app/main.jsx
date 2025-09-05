import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import '../styles.css';

console.log('main.jsx loaded');
console.log('Document ready state:', document.readyState);

// Simple approach - just try to render
try {
  const rootElement = document.getElementById('root');
  console.log('Root element found:', !!rootElement);
  
  if (rootElement) {
    console.log('Creating React root...');
    const root = createRoot(rootElement);
    console.log('Rendering App component...');
    root.render(<App />);
    console.log('App rendered successfully');
  } else {
    console.error('Root element not found!');
  }
} catch (error) {
  console.error('Error in main.jsx:', error);
}
