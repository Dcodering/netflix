import { SignIn} from '@clerk/clerk-react'
import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <SignIn signUpUrl='/sign-up'/>
        
    </div>
  )
}
export default Login