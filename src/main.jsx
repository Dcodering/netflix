import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import TitleCards from './components/TitleCards/TitleCards.jsx'
import Login from './auth/login/Login.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Signup from './auth/singup/SignUp.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/player/:id',
        element: <player />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
  </ClerkProvider>
  </StrictMode>
)
