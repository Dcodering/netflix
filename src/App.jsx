import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUser } from '@clerk/clerk-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {user, isLoaded, isSignedIn} = useUser();

      if (!isSignedIn && isLoaded) {
        return <Navigate to={'/login'} />  
      }
  
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App