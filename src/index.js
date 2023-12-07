import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App/App';
import { MyContextComponent } from './MyContext/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextComponent>
    <App />
    </MyContextComponent>
  </React.StrictMode>
);
