import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

const router = createBrowserRouter([
  { 
   path: '/',
   element: <Layout />,
    children: [
      { 
        index: true,
        element: <Home /> 
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}> 
      <App />
    </RouterProvider>
  </React.StrictMode>
);

