import React, {useState} from 'react';
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {

  const [currState, setCurrState] = useState('Sign up');

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo'/>
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === 'Sign up'? <input type='text' placeholder='Username' className="form-input" required />:null}
        <input type='email' placeholder='Email Address' className="form-input" required />
        <input type='password' placeholder='Password' className="form-input" required />
        <button type='submit'>{currState === 'Sign up'?'Create Account':'Login'}</button>
        <div className="login-term">
          {currState === 'Sign up'?<input type="checkbox" />:null}
          
          {currState === 'Sign up'
          ?<p>Agree to the terms of use & privacy policy.</p>
          :null}
        </div>
        <div className="login-forgot">
          {
            currState === 'Sign up'
            ?<p className="login-toggle">Already have an account? <span onClick={()=>setCurrState('Login')}>Login here.</span> </p>
            :<p className="login-toggle">Create an account? <span onClick={()=>setCurrState('Sign up')}>Click here.</span> </p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login