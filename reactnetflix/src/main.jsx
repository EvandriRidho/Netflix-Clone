import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import LandingPage from './pages/LandingPage'
import Browse from './pages/Browse'
import Watch from './pages/Watch'
import Register from './pages/Register'
import Login from './pages/login'
import FavoriteMovies from './pages/favoriteMovies'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/watch/:id",
    element: <Watch />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/favorite",
    element: <FavoriteMovies />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
