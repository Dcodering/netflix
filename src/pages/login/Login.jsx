import { React, useState } from 'react';
import './login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'

function Login() {
  const [signState, setSignState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userAuth = async(e) =>{
    e.preventDefault()
    if (signState === true) {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  }
  return (
    <div className="login">
      <img src={logo} alt="" className='logo' />
      <div className="loginForm">
        {
          signState ? <h1>Sign In</h1> : <h1>Sign Up</h1>
        }
        <form className="">
          {
            signState ? null: 
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Your Name' />
          }
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' />
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' />
          <button onClick={userAuth} type='submit'>
            {
              signState ? 'Sign In' : 'Sign Up'
            }
          </button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState ?
            <p>New to Netflix? <span onClick={() => setSignState(false)}>Sign Up Now</span></p> :
            <p>ALready have an account? <span onClick={() => setSignState(true)}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login