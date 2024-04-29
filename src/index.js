import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import Users from './Users';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Router = createBrowserRouter([
    {
      path: '/',

      element: <App />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/users',
      element: <Users />,
    }
  ],


);


root.render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);

