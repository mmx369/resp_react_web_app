import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './components/ErrorPage'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WeatherPage } from './pages/WeatherPage'

import './style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'news',
    element: <NewsPage />,
  },
  {
    path: 'weather',
    element: <WeatherPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
