import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import DetailPage from "./pages/DetailPage"
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/products' element={<ProductPage />}/>
      <Route path='/details/:id' element={<DetailPage />} />
      <Route path='/contact' element={<ContactPage />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
