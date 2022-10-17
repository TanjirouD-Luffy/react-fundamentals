import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


// getting the container div from the html page
const divContainer = document.getElementById('root');

// creating a react root element for the divContainer
const root = createRoot(divContainer);

// rendering the contents of the div container

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

