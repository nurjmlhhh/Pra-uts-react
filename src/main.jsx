import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
    path : "/",
    element : <App />,
    children :[
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/products",
        element : <Products />
      },
    ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
