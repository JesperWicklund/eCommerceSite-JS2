import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import DetailPage from './pages/DetailPage'
import CheckoutPage from './pages/CheckoutPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {index: true, element: <HomePage /> },
      {path: "/contact", element: <ContactPage /> },
      {path: "/details/:productId", element: <DetailPage /> },
      {path: "/checkout", element: <CheckoutPage /> }

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
