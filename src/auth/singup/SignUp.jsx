import React from 'react'
import './signup.css'
import { SignUp } from '@clerk/clerk-react'
function Signup() {
  return (
    <div className='signup'>
        <SignUp signInUrl='/login' />
    </div>
  )
}

export default Signup