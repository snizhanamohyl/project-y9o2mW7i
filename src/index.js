import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';

import App from 'components/App/App';
// import './fonts/Goldman/Goldman-Bold.ttf'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-y9o2mW7i">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
