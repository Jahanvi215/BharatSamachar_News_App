import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div><Navbar/>
    <div className='login template d-flex justify-content-center align-item-center 100-w 100-vh '>
        <div className='form-container  p-5 rounded '>
        <form action="">
            <h3>Login</h3>
            <div className='mb-2'>
                <label htmlFor="email" className='my-2'>Email</label>
                <input type="email" placeholder='Enter Email ' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password" className='my-2'>Password</label>
                <input type="password" placeholder='Enter Password ' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
                <label htmlFor="check" className='custom-input-label mx-2'>Remember me</label>
            </div>
            <div className='d-grid my-2'>
                <button className='btn btn-primary'>Sign in</button>
            </div>
            <p className='text-right my-2'>
                Forgot <a href="">Password ?</a> <span className='mx-1'><Link to="/register">Sign Up</Link></span>
            </p>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Login
