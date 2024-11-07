import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Arquivo de estilo global
import App from './App'; // Componente principal
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser medir o desempenho do seu app, pode passar uma função
reportWebVitals();
