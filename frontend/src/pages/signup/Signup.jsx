import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import SignupValidation from '../../utils/SignupValidation'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({}) 
  const handleImput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(SignupValidation(values))
  }
  return (
    <div>
			<div className='container-form'>
					<form className="signup-form" action="" onSubmit={handleSubmit}>
            <div>
              <label className="label" htmlFor="name">Name</label>
              <input className="input-form" type="text" id="name" 
              placeholder="Enter name" required 
              name='name'
              onChange={handleImput}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div>
                <label className="label" htmlFor="email">Email</label>
                <input className="input-form" type="email" id="email" 
                placeholder="Enter email" required 
                name='email'
                onChange={handleImput}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input className="input-form" type="password" id="password" 
              placeholder="Enter password" required 
              name='password'
              onChange={handleImput}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div>
              <label className="label" htmlFor="confirmPassword">Confirm Password</label>
              <input className="input-form" type="password" id="confirmPassword" placeholder="Confirm password" required 
              onChange={handleImput}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
           <div>
              <button className="button-signup-form" type="submit">Register</button>
           </div>
           <div>
              <span>Already have an account? <Link className="a-signup-form" to="/">Login</Link></span>
           </div>
					</form>
			</div>
    </div>
  )
}

export default Signup