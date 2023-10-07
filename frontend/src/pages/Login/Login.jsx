import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Validation from '../../utils/LoginValidation'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({}) 

  const handleImput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(Validation(values))
  }


  return (
    <div>
			<div className='container-form'>
        <form className="login-form" action="" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input className="input-form" type="email" id="email" name='email'
            placeholder="Enter email" required
            onChange={handleImput} /> 
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input className="input-form" type="password" id="password" 
            placeholder="Enter password" required name='password'
            onChange={handleImput} />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div>
            <button className="button-login-form" type="submit">Login</button>
          </div>
          <div>
            <span>New Customer? <Link className="a-form" to="/signup">Register</Link></span>
          </div>
        </form>
			</div>
    </div>
  )
}

export default Login