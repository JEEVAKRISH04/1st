import React from 'react'
import './css/LoginSignup.css'

const LoginSignups = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already Have An Account <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the term of use & use of privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignups
